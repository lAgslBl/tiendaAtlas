import app from './app';
import './database';
import { PORT } from './config';

app.listen(3000);
console.log("Servidor en puerto", PORT);
