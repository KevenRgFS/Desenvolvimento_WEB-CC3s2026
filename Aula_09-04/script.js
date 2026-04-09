//Objetos 

const pessoa = {

    nome: "Fulano",
    idade: 10,
    status:true

}; //objeto

console.log(pessoa);

//acessar as propriedades do objeto

console.log(`Idade de ${pessoa.nome} é ${pessoa.idade} ano(s)`);

const veiculo = {}
veiculo.marca = "Fiat";
veiculo.ano = 2023;
console.log(veiculo);

veiculo.marca = "BYD";
console.log(veiculo);

//construtor -> permite criar diversas instancias de um mesmo objeto.
class Veiculo2 {
    constructor(marca, ano) {
        this.marca = marca;
        this.ano = ano;
    }
}

class contaBancaria{
    #saldo=0; //# -> modificador de acesso privado.
    constructor(saldoInicial){
        this.#saldo = saldoInicial;
    }
    getSaldo(){
        return this.#saldo
    }
}

const c1 = new Veiculo2("BYD", 2025);
const c2 = new Veiculo2("GMW", 2024);

console.log(c1);
console.log(c2.marca);

const conta = new contaBancaria(100);
console.log(conta.saldo);
console.log(conta.getSaldo());


const pessoa2 = ["Bia", "Gabs"]; //array  / vetor
pessoa2[2] = "Keven";
console.log(pessoa2);

//metodos

pessoa2.push("Lise") //adiciona ao final do array
console.log(pessoa2);

pessoa2.unshift("Nomes:") //adiciona ao início do array
console.log(pessoa2);

pessoa2.splice(1, 0, "João") //adiciona em um posição específica do array
console.log(pessoa2);

pessoa2.pop() //remove o último do array
console.log(pessoa2);

pessoa2.shift() //remove o primeiro do array
console.log(pessoa2);

pessoa2.splice(2,1) //remove em um posição específica do array
console.log(pessoa2);