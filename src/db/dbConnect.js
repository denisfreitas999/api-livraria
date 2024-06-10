import mongoose from "mongoose"
import dotenv from 'dotenv';

dotenv.config();

async function conectaNoDatabase() {
  mongoose.connect(`mongodb+srv://${process.env.dbUser}:${process.env.dbPassword}@alura.qjqmaua.mongodb.net/livraria?retryWrites=true&w=majority&appName=Alura`);
  return mongoose.connection;
}

export default conectaNoDatabase;



