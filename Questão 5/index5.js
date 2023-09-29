let btnSimular = document.querySelector("#btn-simular");
let lista1 = document.querySelector("#lista1");
let lista2 = document.querySelector("#lista2");
let lista3 = document.querySelector("#lista3");
let lista4 = document.querySelector("#lista4");
let lista5 = document.querySelector("#lista5");
let lista6 = document.querySelector("#lista6");

let itemLista1 = document.createElement("li");
let itemLista2 = document.createElement("li");
let itemLista3 = document.createElement("li");
let itemLista4 = document.createElement("li");
let itemLista5 = document.createElement("li");
let itemLista6 = document.createElement("li");

btnSimular.addEventListener("click", function(){
    let cont1 = 0;
    let cont2 = 0;
    let cont3 = 0;
    let cont4 = 0;
    let cont5 = 0;
    let cont6 = 0;

    for(let k = 1; k <= 1000000; k++){
        let jogarDado = Math.floor(Math.random() * 6 + 1);

        switch(jogarDado){
            case 1: 
                cont1++;
                break;
            case 2: 
                cont2++;
                break;
            case 3: 
                cont3++;
                break;
            case 4: 
                cont4++;
                break;
            case 5: 
                cont5++;
                break;
            case 6: 
                cont6++;
                break;
        }
    }

    lista1.appendChild(itemLista1);
    itemLista1.textContent = `Quantidade de vezes que o número 1 foi sorteado: ${cont1}`;

    lista2.appendChild(itemLista2);
    itemLista2.textContent = `Quantidade de vezes que o número 2 foi sorteado: ${cont2}`;

    lista3.appendChild(itemLista3);
    itemLista3.textContent = `Quantidade de vezes que o número 3 foi sorteado: ${cont3}`;

    lista4.appendChild(itemLista4);
    itemLista4.textContent = `Quantidade de vezes que o número 4 foi sorteado: ${cont4}`;

    lista5.appendChild(itemLista5);
    itemLista5.textContent = `Quantidade de vezes que o número 5 foi sorteado: ${cont5}`;

    lista6.appendChild(itemLista6);
    itemLista6.textContent = `Quantidade de vezes que o número 6 foi sorteado: ${cont6}`;
})