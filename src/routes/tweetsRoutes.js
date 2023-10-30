import express  from "express";
import TweetController from "../controllers/tweetController.js";

const routes = express.Router();

routes.get("/classificacao", TweetController.listarTweets);
routes.post("/classificacao", TweetController.cadastrarTweet);
routes.put("/classificacao/:id", TweetController.atualizarClassificacaoTweet);
routes.delete("/classificacao/:id", TweetController.excluirTweet)
export default routes;