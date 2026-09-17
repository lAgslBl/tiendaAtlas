import express from "express";
import indexRoutes from "./routes/indexRoutes";
import exphbs from "express-handlebars";
import path from "path";
import morgan from "morgan";

const app = express();

// Vistas
app.set("views", path.join(__dirname, "views"));

// Motor de plantillas (v5 → sin .engine)
app.engine(
    ".hbs",
    exphbs({
        layoutsDir: path.join(app.get("views"), "layouts"),
        partialsDir: path.join(app.get("views"), "partials"),
        defaultLayout: "main",
        extname: ".hbs",
        helpers: {
            formatoFecha: (fecha) => {
                if (!fecha) return "";
                const d = new Date(fecha);
                const dia = String(d.getUTCDate()).padStart(2, "0");
                const mes = String(d.getUTCMonth() + 1).padStart(2, "0");
                const anio = d.getUTCFullYear();
                return `${dia}/${mes}/${anio}`;
            },
            fechaParaInput: (fecha) => {
                if (!fecha) return "";
                const d = new Date(fecha);
                const dia = String(d.getUTCDate()).padStart(2, "0");
                const mes = String(d.getUTCMonth() + 1).padStart(2, "0");
                const anio = d.getUTCFullYear();
                return `${anio}-${mes}-${dia}`;
            }
        }
    })
);
app.set("view engine", ".hbs");

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Rutas
app.use(indexRoutes);

// Estáticos
app.use(express.static(path.join(__dirname, "frontend")));

export default app;