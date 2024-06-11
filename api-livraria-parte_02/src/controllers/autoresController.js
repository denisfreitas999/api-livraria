import NaoEncontrado from "../errors/NaoEncontrado.js";
import { AutorModel } from "../models/index.js";

class AutorController {

  static listarAutores = async (req, res, next) => {
    try {
      const autoresResultado = await AutorModel.find();

      res.status(200).json(autoresResultado);

    } catch (erro) {
      next(erro);
    }
  };

  static listarAutorPorId = async (req, res, next) => {

    try {
      const id = req.params.id;

      if (id === null || id === undefined) {
        res.status(400).json({ message: "Parâmetros não definidos." });
      }

      const autorResultado = await AutorModel.findById(id);

      if (autorResultado === null) {
        next(new NaoEncontrado("Id do autor não localizado."));
      }

      res.status(200).json(autorResultado);
    } catch (erro) {
      next(erro);
    }
  };


  static cadastrarAutor = async (req, res, next) => {
    try {
      let autor = new AutorModel(req.body);

      const autorResultado = await autor.save();

      res.status(201).send(autorResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  };


  static atualizarAutor = async (req, res, next) => {
    try {
      const id = req.params.id;

      const autorResultado = await AutorModel.findByIdAndUpdate(id, { $set: req.body });

      if (autorResultado !== null) {
        res.status(200).send({ message: "Autor atualizado com sucesso" });
      } else {
        next(new NaoEncontrado("Id do Autor não localizado."));
      }

    } catch (erro) {
      next(erro);
    }
  };

  static excluirAutor = async (req, res, next) => {
    try {
      const id = req.params.id;

      const autorResultado = await AutorModel.findByIdAndDelete(id);

      if (autorResultado !== null) {
        res.status(200).send({ message: "Autor removido com sucesso" });
      } else {
        next(new NaoEncontrado("Id do Autor não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };
}

export default AutorController;