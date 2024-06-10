import LivroModel from '../models/Livro.js';

class LivroController {

  static async listarLivros(req, res) {
    try {
      const listaLivros = await LivroModel.find({});
      return res.status(200).json({ msg: 'Busca realizada com sucesso.', listaLivros });
    } catch (error) {
      return res.status(500).json({ msg: `${error.message}. Falha ao buscar livros.` });
    }
  }

  static async listarLivroPorId(req, res) {
    try {
      const id = req.params.id;
      const livro = await LivroModel.findById(id);
      return res.status(200).json({ msg: 'Livro encontrado com sucesso.', livro });
    } catch (error) {
      return res.status(500).json({ msg: `${error.message}. Falha ao busca livro.` });
    }
  }

  static async cadastrarLivro(req, res) {
    try {
      const novoLivro = await LivroModel.create(req.body);
      return res.status(201).json({ msg: 'Livro cadastrado com sucesso', livro: novoLivro });
    } catch (error) {
      return res.status(500).json({ msg: `${error.message}. Falha ao cadastrar livro.` });
    }
  }

  static async atualizarLivroPorId(req, res) {
    try {
      const id = req.params.id;
      const livro = await LivroModel.findByIdAndUpdate(id, req.body);
      return res.status(200).json({ msg: 'Livro atualizado com sucesso.', livro });
    } catch (error) {
      return res.status(500).json({ msg: `${error.message}. Falha ao atualizar livro.` });
    }
  }

  static async deletarLivroPorId(req, res) {
    try {
      const id = req.params.id;
      await LivroModel.findByIdAndDelete(id);
      return res.status(200).json({ msg: 'Livro deletado com sucesso.' });
    } catch (error) {
      return res.status(500).json({ msg: `${error.message}. Falha ao deletar livro.` });
    }
  }

}

export default LivroController;