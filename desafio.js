/*
    Faça um programa para calcular o valor de uma viagem 

    Você terá 3 variáveis. Sendo elas:
    1 - Preço do etanol;
    2 - Preço da gasolina;
    3 - O tipo de combustivel que está no seu carro;
    4 - Gasto médio de combustivel do carro por KM;
    5 - Distancia em KM da viagem;

    Imprima no console o valor que será gasto para realizar esta viagem.
*/

const etanol = 4.06;
const gasolina = 6.15;
const Kml = 18;
const distancia = 241;
const tipoCombustivel = 'Gasolina'

const litrosConsumidos = distancia / Kml

if (tipoCombustivel === 'Etanol') {
    const valor = litrosConsumidos * etanol
    console.log(valor.toFixed(2))
} else {
    const valor = litrosConsumidos * gasolina
    console.log(valor.toFixed(2))
}
