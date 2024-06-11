import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: [true, "O nome do(a) autor(a) é obrigatório."]
    },
    nacionalidade: {
      type: String
    }
  }, { versionKey: false });

const AutorModel = mongoose.model("autores", autorSchema);

export default AutorModel;