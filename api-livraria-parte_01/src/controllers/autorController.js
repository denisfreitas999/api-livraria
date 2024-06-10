import { AutorModel } from '../models/Autor.js';

class AutorController {

  static async listarAutores(req, res) {
    try {
      const listaAutores = await AutorModel.find({});
      return res.status(200).json({ msg: 'Busca realizada com sucesso.', listaAutores });
    } catch (error) {
      return res.status(500).json({ msg: `${error.message}. Falha ao buscar autores.` });
    }
  }

  static async listarAutorPorId(req, res) {
    try {
      const id = req.params.id;
      const autor = await AutorModel.findById(id);
      return res.status(200).json({ msg: 'Autor encontrado com sucesso.', autor });
    } catch (error) {
      return res.status(500).json({ msg: `${error.message}. Falha ao busca autor.` });
    }
  }

  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await AutorModel.create(req.body);
      return res.status(201).json({ msg: 'Autor cadastrado com sucesso', autor: novoAutor });
    } catch (error) {
      return res.status(500).json({ msg: `${error.message}. Falha ao cadastrar autor.` });
    }
  }

  static async atualizarAutorPorId(req, res) {
    try {
      const id = req.params.id;
      const autor = await AutorModel.findByIdAndUpdate(id, req.body);
      return res.status(200).json({ msg: 'Autor atualizado com sucesso.', autor });
    } catch (error) {
      return res.status(500).json({ msg: `${error.message}. Falha ao atualizar autor.` });
    }
  }

  static async deletarAutorPorId(req, res) {
    try {
      const id = req.params.id;
      await AutorModel.findByIdAndDelete(id);
      return res.status(200).json({ msg: 'Autor deletado com sucesso.' });
    } catch (error) {
      return res.status(500).json({ msg: `${error.message}. Falha ao deletar autor.` });
    }
  }

}

export default AutorController;