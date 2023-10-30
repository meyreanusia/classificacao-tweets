import express  from "express";
import tweets from "./tweetsRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("classificacao de Tweets"));
    app.use(express.json(), tweets);
};

export default routes;