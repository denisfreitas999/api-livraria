import 'dotenv/config';
import express from 'express';
import conectaNoDatabase from './db/dbConnect.js';
import routes from './routes/router.js';

const conexao = await conectaNoDatabase();

conexao.on("error", (erro) => {
  console.error("Erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conectado com o banco");
});

const app = express();
routes(app);

export default app;