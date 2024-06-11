import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
export default function manipuladorDeErros(erro, req, res, next) {

  console.log(erro);

  if (erro instanceof mongoose.Error.CastError) {
    res.status(400).json({ msg: "Um ou mais dados fornecidos estão incorretos" });
  } else {
    res.status(500).json({ msg: "Erro interno no servidor." });
  }
}