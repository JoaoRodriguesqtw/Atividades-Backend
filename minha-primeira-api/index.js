import express from "express";

const app = express(); //Primeiro pilar: instancia do express

app.get("/", (req,res) => {
    res.send("bananinha")
});

app.get("/livros", (req,res) => {
    res.send("Hello world!")
});

app.listen(3000); // porta a ser ouvida
