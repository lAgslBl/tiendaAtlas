import { Schema, model } from "mongoose";

const clienteEsquema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    apellido: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    telefono: {
      type: String,
      required: true,
      trim: true,
    },
    fechaNacimiento: {
      type: Date,
      required: false,
    },
    direccion: {
      type: String,
      required: true,
      trim: true,
    },
    ciudad: {
      type: String,
      required: true,
      trim: true,
    },
    codigoPostal: {
      type: String,
      required: true,
      trim: true,
    },
    rfc: {
      type: String,
      required: false,
      trim: true,
      uppercase: true,
    },
    notas: {
      type: String,
      required: false,
      trim: true,
    },
    opcion: {
      type: Boolean,
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Clientes", clienteEsquema);