export class Carro {
    
    
    marca;
    modelo;
    ano;
    velocidade;
    estado;
    
        constructor(modelo, marca, ano) {
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
    }

    ligar(){
        if (this.estado === false) {
            this.estado = true;
        
        }
    }


    acelerar() {
        if (this.estado = true && this.velocidade < 200) {
            this.velocidade += 10;

        }
    }

    frear() {
        if (this.estado == true && this.velocidade > 0) {
            this.velocidade -= 10;

        }
        
    }



    desligar (){
        if (this.estado == true && this.velocidade <= 20) {
            this.estado = false;
            this.velocidade = 0;

        } 

    }
}
