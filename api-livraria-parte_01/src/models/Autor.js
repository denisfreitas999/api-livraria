import mongoose from "mongoose";

export const autorSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId
  },
  nome: {
    type: String,
    required: true
  },
  nacionalidade: {
    type: String
  }
}, { versionKey: false });

export const AutorModel = mongoose.model("autores", autorSchema);
