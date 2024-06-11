import { AutorModel, LivroModel } from "../models/index.js";
import NaoEncontrado from "../errors/NaoEncontrado.js"

class LivroController {

  static listarLivros = (req, res, next) => {
    try {
      const buscaLivros = LivroModel.find(); // Cria a query
      req.resultado = buscaLivros; // Atribui a query ao request para uso posterior
      next(); // Passa para o próximo middleware
    } catch (erro) {
      next(erro);
    }
  };

  static listarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;

      const livroResultado = await LivroModel.findById(id, {}, { autopopulate: false });
      if (livroResultado !== null) {
        res.status(200).send(livroResultado);
      } else {
        next(new NaoEncontrado("Id do livro não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static cadastrarLivro = async (req, res, next) => {
    try {
      let livro = new LivroModel(req.body);

      const livroResultado = await livro.save();

      res.status(201).json({ message: "Livro Cadastrado com sucesso.", livroResultado });
    } catch (erro) {
      next(erro);
    }
  };

  static atualizarLivro = async (req, res, next) => {
    try {
      const id = req.params.id;

      const livroResultado = await LivroModel.findByIdAndUpdate(id, { $set: req.body });

      if (livroResultado !== null) {
        res.status(200).send({ message: "Livro atualizado com sucesso" });
      } else {
        next(new NaoEncontrado("Id do livro não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static excluirLivro = async (req, res, next) => {
    try {
      const id = req.params.id;

      const livroResultado = await LivroModel.findByIdAndDelete(id);

      if (livroResultado !== null) {
        res.status(200).send({ message: "Livro removido com sucesso" });
      } else {
        next(new NaoEncontrado("Id do livro não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static listarLivroPorEditora = async (req, res, next) => {
    try {
      const editora = req.query.editora;

      const livrosResultado = await LivroModel.find({ "editora": editora });

      res.status(200).send(livrosResultado);
    } catch (erro) {
      next(erro);
    }
  };

  static listarLivroPorFiltro = async (req, res, next) => {
    try {
      const busca = await processaBusca(req.query);

      if (busca !== null) {
        const livrosResultado = await LivroModel.find(busca);
        req.resultado = livrosResultado;
        next();
      } else {
        res.status(200).send([]);
      }
    } catch (erro) {
      next(erro);
    }
  };
}


async function processaBusca(parametros) {
  const { editora, titulo, minPaginas, maxPaginas, nomeAutor } = parametros;
  /* console.log(editora, titulo, minPaginas, maxPaginas, nomeAutor) */
  const regexJS = new RegExp(titulo, "i");
  let busca = {};

  if (editora) busca.editora = { $regex: editora, $options: "i" };
  if (titulo) busca.titulo = regexJS;

  if (minPaginas || maxPaginas) busca.numeroPaginas = {};

  // gte = Greater Than or Equal
  if (minPaginas) busca.numeroPaginas.$gte = minPaginas;
  // lte = Less Than or Equal
  if (maxPaginas) busca.numeroPaginas.$lte = maxPaginas;

  if (nomeAutor) {
    const autor = await AutorModel.findOne({ nome: nomeAutor });

    if (autor) {
      busca.autor = autor._id;;
    } else {
      // Autor não encontrado
      busca = null;
    }
  }

  return busca;
}

export default LivroController;