let gasolinaInput = document.querySelector("#gasolina");
let alcoolInput = document.querySelector("#alcool");
let btnCalculo = document.querySelector("#btn-calcular");
let resultadoDiv = document.querySelector("#resultado");

const calcularMelhorCombustivel = function(gasolina, alcool){
    let resultado = gasolina / alcool;
    if(resultado < 0.7){
        return 1;
    }
    else{
        return 0;
    }
}

//btnCalculo.addEventListener("click", function(){
btnCalculo.addEventListener("click", () => {
    let gasolina = parseFloat(gasolinaInput.value);
    let alcool = parseFloat(alcoolInput.value);

    let resultado = calcularMelhorCombustivel(gasolina, alcool);

    if(resultado == 1){
        resultadoDiv.textContent = "Abasteça com alcool";
    }
    else{
        resultadoDiv.textContent = "Abasteça com gasolina";
    }
})