const gerarNumero = function(){
    let numero = parseInt(100*Math.random());
    return numero;
    }

    let botao = document.querySelector("#botao");
    botao.addEventListener("click", function(){
        let numero = gerarNumero();
        console.log(numero);
        let lista = document.querySelector("ul");
        let itemLista = document.createElement("li");
        lista.appendChild(itemLista);
        itemLista.textContent = numero;
    })


    
    /*function gerarNumero(){
        return Math.random() * 100;
    }

    const botao = document.querySelector("button");
    botao.addEventListener("click", () => {
        const numeroGerado = gerarNumero();
        const novoNumero = 
        doc
    })*/