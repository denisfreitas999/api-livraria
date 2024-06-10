import EditoraModel from '../models/Editora.js';

class EditoraController {

  static async listarEditoras(req, res) {
    try {
      const listaEditoras = await EditoraModel.find({});
      return res.status(200).json({ msg: 'Busca realizada com sucesso.', listaEditoras });
    } catch (error) {
      return res.status(500).json({ msg: `${error.message}. Falha ao buscar editoras.` });
    }
  }

  static async listarEditoraPorId(req, res) {
    try {
      const id = req.params.id;
      const editora = await EditoraModel.findById(id);
      return res.status(200).json({ msg: 'Editora encontrado com sucesso.', editora });
    } catch (error) {
      return res.status(500).json({ msg: `${error.message}. Falha ao busca editora.` });
    }
  }

  static async cadastrarEditora(req, res) {
    try {
      const novoEditora = await EditoraModel.create(req.body);
      return res.status(201).json({ msg: 'Editora cadastrado com sucesso', editora: novoEditora });
    } catch (error) {
      return res.status(500).json({ msg: `${error.message}. Falha ao cadastrar editora.` });
    }
  }

  static async atualizarEditoraPorId(req, res) {
    try {
      const id = req.params.id;
      const editora = await EditoraModel.findByIdAndUpdate(id, req.body);
      return res.status(200).json({ msg: 'Editora atualizado com sucesso.', editora });
    } catch (error) {
      return res.status(500).json({ msg: `${error.message}. Falha ao atualizar editora.` });
    }
  }

  static async deletarEditoraPorId(req, res) {
    try {
      const id = req.params.id;
      await EditoraModel.findByIdAndDelete(id);
      return res.status(200).json({ msg: 'Editora deletado com sucesso.' });
    } catch (error) {
      return res.status(500).json({ msg: `${error.message}. Falha ao deletar editora.` });
    }
  }

}

export default EditoraController;