import LivroModel from '../models/Livro.js';
import { AutorModel } from '../models/Autor.js';

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
    const novoLivro = req.body;

    try {
      const autorEncontrado = await AutorModel.findById(novoLivro.autor);

      console.log(autorEncontrado);

      const livroCompleto = {
        ...novoLivro,
        autor: { ...autorEncontrado._doc }
      }

      const livroCriado = await LivroModel.create(livroCompleto);
      return res.status(201).json({ msg: 'Livro cadastrado com sucesso', livro: livroCriado });
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

  static async listarLivrosPorEditora(req, res) {
    const editora = req.query.editora;
    try {
      const livroPorEditora = await LivroModel.find({ editora });
      return res.status(200).json({ msg: 'Livros encontrados.', livroPorEditora });
    } catch (error) {
      return res.status(500).json({ msg: `${error.message}. Falha ao buscar livro pela editora.` });
    }
  }
}
export default LivroController;