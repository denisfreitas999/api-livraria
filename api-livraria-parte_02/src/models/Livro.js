import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const livroSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: [true, "O título do livro é obrigatório."]
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "autores",
      required: [true, "O(a) autor(a) é obrigatório."],
      autopopulate: true
    },
    editora: {
      type: String,
      required: [true, "A editora é obrigatória."],
      enum: {
        values: ["Casa do código", "Alura"],
        message: "A editora {VALUE} não é um valor permitido."
      }
    },
    numeroPaginas: {
      type: Number,
      min: [10, "O número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"],
      max: [5000, "O número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"]
    },
    numeroCapitulos: {
      type: Number,
      validate: {
        validator: (valor) => {
          return valor >= 1 && valor <= 100;
        },
        message: "O número de capítulos deve estar entre 1 e 100. Valor fornecido: {VALUE}"
      }
    }
  });

livroSchema.plugin(autopopulate);
const LivroModel = mongoose.model("livros", livroSchema);

export default LivroModel;