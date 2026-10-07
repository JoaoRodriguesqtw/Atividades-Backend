import express from "express";
import livrosRouter from "./routes/livros-routes.js";



const app = express(); //Primeiro pilar: instancia do express
const PORT = 3000;

app.use(express.json()); 

app.use("/livros",livrosRouter );


app.listen(PORT); // porta a ser ouvida
