import mongoose  from "mongoose";

const tweetSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.ObjectId},
    tweet: {type: String, require: true},
    classificacao: {type: String},
}, {versionKey: false});

const tweet = mongoose.model("tweets", tweetSchema);
export default tweet