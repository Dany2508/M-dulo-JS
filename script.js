import {calcularAreaCirculo, calculaPerimetroCirculo, nomeCirculo} from "./circulo.js"
import {calcularAreaQuadrado, calculaPerimetroQuadrado, nomeQuadrado} from "./quadrado.js"

const botaoCalcular = document.getElementById("calcular-btn")
const campoLado1 = document.getElementById("lado1")
const campoRaio1 = document.getElementById("raio1")
const paragrafoResultado1 = document.getElementById("resultado1")
const paragrafoResultado2 = document.getElementById("resultado2")

botaoCalcular.addEventListener("click",()=>{
    const lado1 = parseFloat(campoLado1.value);
    const raio1 = parseFloat(campoRaio1.value);
    
    //Calculo Quadrado
    const perimetroQuadrado = calculaPerimetroQuadrado(lado1).toFixed(2)
    const areaQuadrado = calcularAreaQuadrado(lado1).toFixed(2)
    paragrafoResultado1.innerText = `O ${nomeQuadrado} tem aproximadamente perimetro igual a: ${perimetroQuadrado} e área igua a ${areaQuadrado}`

    //Calculo Circulo
    const perimetroCirculo = calculaPerimetroCirculo(raio1).toFixed(2)
    const areaCirculo = calcularAreaCirculo(raio1).toFixed(2)
    paragrafoResultado2.innerText = `O ${nomeCirculo} tem aproaproximadamente perimetro igual a: ${perimetroCirculo} e área igua a ${areaCirculo}`
})