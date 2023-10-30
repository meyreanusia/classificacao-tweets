import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
// import tweet from "./models/Tweet.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
  console.error("Erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("conexão com o banco feita com sucesso");
});

const app = express();
routes(app)
app.use(express.json())
export default app;
