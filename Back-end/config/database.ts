import { Error } from "mongoose";
const mongoose = require('mongoose');

const MONGO_URI: string = process.env.MONGO_URI || '';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Vous êtes bien connecté à votre base de données"))
    .catch((err: Error) => console.log(err));
