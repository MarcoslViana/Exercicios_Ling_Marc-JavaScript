window.addEventListener("load", function(){

    let aux=0;
    let fahrenheit = "---";
    let kelvin = "---";

    let spanFahrenheit = document.querySelector("#tempFahrenheit");
    let spanKelvin = document.querySelector("#tempKelvin");
    let alerta = document.querySelector("#alerta");

    let paragrafo1 = document.createElement("p");
    let paragrafo2 = document.createElement("p");
    let paragrafo3 = document.createElement("p");

    let celsiusInput = document.querySelector("#celsiusInput");

    spanFahrenheit.appendChild(paragrafo1);
    paragrafo1.textContent = `Temperatura em Fahrenheit: ${fahrenheit}`;

    spanKelvin.appendChild(paragrafo2);
    paragrafo2.textContent = `Temperatura em Kelvin: ${kelvin}`;

    let converterFahrenheit = function(celsius){
        let tempfahrenheit = celsius * 1.8 + 32;
        return tempfahrenheit;
    }
    let converterKelvin = function(celsius){
        let tempkelvin = celsius*1 + 273;
        return tempkelvin;
    }
    let keyupEvent = function(){
        document.addEventListener("keyup", function(){
            let celsius = celsiusInput.value;
            
            if(!isNaN(celsius)){
                if(aux>0){
                    aviso.removeChild(paragrafo3);
                }    
                fahrenheit = converterFahrenheit(celsius);
                kelvin = converterKelvin(celsius);
                console.log(celsius);   
                paragrafo1.textContent = `Temperatura em Fahrenheit: ${fahrenheit}`;
                paragrafo2.textContent = `Temperatura em Kelvin: ${kelvin}`;
            }
            else{
                let fahrenheit = "---";
                let kelvin = "---";     
                paragrafo1.textContent = `Temperatura em Fahrenheit: ${fahrenheit}`;
                paragrafo2.textContent = `Temperatura em Kelvin: ${kelvin}`; 
                aviso.appendChild(paragrafo3);
                paragrafo3.textContent = "Valor para conversão inválido!";
                aux++;
            }
        
        })  
    
    }
    
    keyupEvent();
        
})