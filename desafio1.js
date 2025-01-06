/*

    Você tem 3 variaveis, sendo elas:
    1 - Preço do combustivel;
    2 - Gasto medio de combustivel do carro por KM; 
    3 - Distancia em KM da viagem.

*/

const combustivel = 5.79;
const KmL = 11; 
const distanciaKm = 67;

const litros = distanciaKm / KmL;
const totalGasto = litros * combustivel;

console.log(totalGasto);