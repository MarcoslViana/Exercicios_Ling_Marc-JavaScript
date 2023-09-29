
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

