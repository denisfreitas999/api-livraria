import "dotenv/config.js";
import express from "express";
import conectaNoDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNoDatabase();

conexao.on("error", (erro) => {
  console.error("Erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conectado com o banco");
});

const app = express();
app.use(express.json());
routes(app);

export default app;
