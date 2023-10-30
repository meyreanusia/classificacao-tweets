import { text } from "express";
import tweet from "../models/Tweet.js";

class TweetController {

  static async listarTweets(req, res) {
    try{
    const listaTweets = await tweet.find({});
    res.status(200).json(listaTweets);
    }catch(error){
        res.status(500).json({message: `${error.message}- Falha na requisição`})
    }
  }
  static async cadastrarTweet(req, res) {
    try {
      const novoTweet = await tweet.create(req.body);
      res.status(201).json({ message: "Criado com sucesso", tweet: novoTweet });
    } catch (error) {
      res.status(500).json({ message: `${error.message}} - falha ao cadastrar tweet` });
    }
  }

  static async atualizarClassificacaoTweet(req, res){
    try{
      const id = req.params.id;
      await tweet.findByIdAndUpdate(id, req.bo);
      res.status(200).json({message: "Tweet atualizado"})
    }catch(error){
        res.status(500).json({})
    }
  }

  static async excluirTweet(req, res){
    try{
      const id = req.params.id;
      await tweet.findByIdAndDelete(id);
      res.status(200).json({ message: `Tweet excluido com sucesso`})
    }catch(error){
      res.status(500).json({ message: `${error.message} - falha na exclusão`})
    }
  }
};

export default TweetController;
