import mongoose from "mongoose";
import { autorSchema } from './Autor.js';

const livroSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId
  },
  titulo: {
    type: String,
    required: true
  },
  editora: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'editoras',
    required: true
  },
  preco: {
    type: Number,
  },
  paginas: {
    type: Number,
  },
  autor: autorSchema
}, { versionKey: false });

const LivroModel = mongoose.model("livros", livroSchema);

export default LivroModel;