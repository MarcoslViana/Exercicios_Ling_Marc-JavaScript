
const gerarNumero = function() {
    let numero = parseInt(100 * Math.random());
    return numero;
}

let botao = document.querySelector("#botao");

botao.addEventListener("click", function(){
    let numero = gerarNumero();
    console.log(numero);

    let lista = document.querySelector("ul");
    let item = document.createElement("li");
    lista.appendChild(item);
    item.textContent = numero;
})
    


/* // Declaração de uma função anônima chamada gerarNumero que não recebe nenhum argumento.
const gerarNumero = function() {
    // Gera um número aleatório entre 0 e 99, multiplica por 100 e converte para um número inteiro.
    let numero = parseInt(100 * Math.random());
    // Retorna o número gerado.
    return numero;
}

// Seleciona o elemento HTML com o ID "botao" e armazena na variável botao.
let botao = document.querySelector("#botao");

// Adiciona um ouvinte de evento para o botão quando ele for clicado.
botao.addEventListener("click", function(){
    // Chama a função gerarNumero para obter um número aleatório.
    let numero = gerarNumero();
    // Exibe o número gerado no console do navegador.
    console.log(numero);

    // Seleciona o elemento HTML "ul" (uma lista não ordenada) e armazena na variável lista.
    let lista = document.querySelector("ul");

    // Cria um novo elemento HTML "li" (um item de lista).
    let item = document.createElement("li");

    // Adiciona o item à lista.
    lista.appendChild(item); //O método appendChild() é usado para adicionar um novo elemento como filho de outro elemento.

    // Define o texto do item de lista como o número gerado.
    item.textContent = numero; //Nesta linha, estamos definindo o conteúdo de texto do elemento item. 
}) */

