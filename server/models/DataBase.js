import mongoose from "mongoose";
mongoose.set('strictQuery', false);
const uri = 'mongodb://127.0.0.1:27017/react';

const option = {
    useNewUrlParser: true,
    useUniFiedTopology: true,
};

mongoose.connect(uri, option);

const db = mongoose.connection;

export default db;