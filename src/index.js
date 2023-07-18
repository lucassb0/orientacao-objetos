import { Carro } from './modules/carro.js';

const up = new Carro(`Up`, `Vw`, 2015);

up.ligar();

console.log(`Velocidade inicial: ${up.velocidade}km/h`);

up.acelerar()
up.acelerar()

console.log(`Velocidade atual: ${up.velocidade}km/h`);

for (let i = 0; i <000; i++) {
    up.acelerar();
}

console.log(`Velocidade atual: ${up.velocidade}km/h`);

up.frear();
up.frear();

console.log(`Velocidade atual: ${up.velocidade}km/h`);

up.desligar();

console.log(`Velocidade atual: ${up.velocidade}km/h`);