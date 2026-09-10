// crie um array de objetos
// encontre, usando um FOR um unico registro, de acordo com uma condição
//depois, encontre o mesmo registro usando um find

const lista_produtos = [

    {id: 1, nome: "notebook lenovo",preco: 1000},
    {id: 2, nome: "fone de ouvido logitech g335",preco: 240},
    {id: 3, nome: "camisa do gremio",preco: 1000},
    {id: 4, nome: "terno do inter",preco: 1000},
    {id: 5, nome: "torneira",preco: 1000}
];


// for(i = 0; i < lista_produtos.length;i++){
//     produto_atual = lista_produtos[i];
//     if (produto_atual.preco < 500){
//         console.log(produto_atual)
//     }
// };


const menor_preco = lista_produtos.find((u) => u.preco < 500);
console.log(menor_preco);
