let baseInput = document.querySelector("#base");
let expoenteInput = document.querySelector("#expoente");
let btnCalculo = document.querySelector("#btn-calcular");
let resultadoDiv = document.querySelector("#resultado");

const calcPotencia = function(base, expoente) {
    return Math.pow(base, expoente);
}

//btnCalculo.addEventListener("click", function() {
btnCalculo.addEventListener("click", () => {
    let base = parseInt(baseInput.value);
    let expoente = parseInt(expoenteInput.value);

    let resultado = calcPotencia(base, expoente);

    resultadoDiv.textContent = `Resultado: ${resultado}`;
})