import mongoose from "mongoose";

const editoraSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId
  },
  nome: {
    type: String,
    required: true
  }
});

const EditoraModel = mongoose.model("editoras", editoraSchema);

export default EditoraModel;