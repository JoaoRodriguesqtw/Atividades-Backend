import express from "express";

const app = express(); //Primeiro pilar: instancia do express
app.use(express.json())
const PORT = 3000;
let ultimo_id = 1;

let livros = [
  { id: 1, dsTitulo: "As cronicas de narnia", dsAutor: "C.S. Lewis" },
]; // banco de dados

// metodos + caminhos + funcção
app.get("/", (req, res) => {
  res.send("rota raiz");
});

// rota que pega todos os livros
app.get("/livros", (req, res) => {
  res.json(livros);
});

// rota que pega um livro unico
app.get("/livros/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    // se não for um numero
    return res
      .status(400) // requisição mal formada
      .json({ mensagem: "o parametro deve ser um numero valido" });
  }
  //find
  let livro = livros.find((livro) => {
    return livro.id === id;
  });
  

  if (!livro) {
    return res.status(404).send();
  }

  res.json(livro);
});


// rota que cria um livro
app.post("/livros",(req,res)=>{
  let id_novo = ultimo_id + 1;
  ultimo_id++;

  let autor_enviado = req.body.dsAutor;
  let titulo_enviado = req.body.dsTitulo;

  if(!autor_enviado ||!titulo_enviado ){
    return res.status(400).json({mensagem:"dados faltando, verifique autor e titulo"})
  };

  let novo_livro = {
    id : id_novo,
    fgDisponivel : true,
    dsTitulo: titulo_enviado,
    dsAutor: autor_enviado
  };

livros.push(novo_livro); // novo livro adicionado
res.status(201).json(novo_livro);

});

// rota que deleta um livro pelo id
app.delete("/livros/:id",(req,res)=>{
  const id = parseInt(req.params.id);

  if(isNaN(id)){
    return res.status(400).json({mensagem:"identificador deve ser um numero"});
  };

  let indexLivro = livros.findIndex((livro) =>{
    return livro.id === id;
  });
  

  if(indexLivro === -1){
    return res.status(404).send();
  };

  livros.splice(indexLivro,1);
  res.status(204).send()
});

app.listen(PORT); // porta a ser ouvida

