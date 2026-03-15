//Funções gerais para todas as questões:

let sorteado;

function aleatorio(min, max) {
    sorteado = Math.floor(Math.random() * (max - min + 1) + min);
    return sorteado;
}

/*--------------------------------------------------------------------------------------------------------*/

// Função especifica para cada questão:

//Q001:

function comparar() {

        let tentativa = Number(document.getElementById("tentativa").value);

        if(tentativa > sorteado){
            let saida = `${tentativa} é maior que o número sorteado. Continue!`
            document.getElementById("resposta").innerHTML = saida;
        }
        else if(tentativa < sorteado){
            let saida = `${tentativa} é menor que o número sorteado. Continue!`
            document.getElementById("resposta").innerHTML = saida;
        }
        else{
            let saida = `Você acertou! O número sorteado era ${sorteado}. Parabéns!`
            document.getElementById("resposta").innerHTML = saida;
        }
}

//Q002

function escolherPPT(){
    let escolhaUsuario = prompt("Escolha: pedra, papel ou tesoura");
    escolhaUsuario = escolhaUsuario.trim().toLowerCase();
    escolhaUsuario = escolhaUsuario.charAt(0).toUpperCase() + escolhaUsuario.slice(1);
    if(escolhaUsuario !== "Pedra" && escolhaUsuario !== "Papel" && escolhaUsuario !== "Tesoura"){
        alert("Opção inválida! Por favor, escolha pedra, papel ou tesoura.");
        return;
    }

    let escolhaComputador = aleatorio(1, 3);
    setTimeout(() => {
        console.log("1...");
    }, 1000);
        setTimeout(() => {
        console.log("2...");
    }, 2000);
        setTimeout(() => {
        console.log("3...");
        console.log(`Jogador: ${escolhaUsuario}`);
        if(escolhaComputador === 1){
            console.log("Computador: Pedra");
        } else if(escolhaComputador === 2){
            console.log("Computador: Papel");
        }else {
            console.log("Computador: Tesoura");
        }
    }, 3000);
   
    setTimeout(() => {
        if(escolhaUsuario === "Pedra" && escolhaComputador === 3 || escolhaUsuario === "Papel" && escolhaComputador === 1 || escolhaUsuario === "Tesoura" && escolhaComputador === 2){
            console.log("Parabéns! Você venceu!! :)");
        }
        else if(escolhaUsuario === "Pedra" && escolhaComputador === 2 || escolhaUsuario === "Papel" && escolhaComputador === 3 || escolhaUsuario === "Tesoura" && escolhaComputador === 1){
            console.log("Não foi dessa vez. Infelizmente você Perdeu. :( ");
        }
        else if(escolhaUsuario === "Pedra" && escolhaComputador === 1 || escolhaUsuario === "Papel" && escolhaComputador === 2 || escolhaUsuario === "Tesoura" && escolhaComputador === 3){
            console.log("Aperece que tivemos uma empate! Tente Novamente ):)")
        }
    }, 4000);
}

function limparPPT(){
    console.clear();
}

//Q003

function tabuada(){

    let valor = Number(document.getElementById("valor").value)
    for(let i = 0; i<11; i++){
        let produto = valor * i;
        let resultado = `${valor} x ${i} = ${produto}`;
        document.getElementById("Resultado").innerHTML += resultado + "<br>";
    }
}

function limpar(){

    document.getElementById("Resultado").innerHTML = "";
}

//Q004

function triangulo(){
    let altura = Number(document.getElementById("linhas").value);

    for(let i = 1; i<=altura; i++){
        let linha = "";
        for(let j = 1; j<=i; j++){
            linha += "* ";
        }   
        document.getElementById("triangulo").innerHTML += linha + "<br>";
    }
}

function limpar2(){

    document.getElementById("triangulo").innerHTML = "";
}

//Q005

function soma(){
    let num = Number(document.getElementById("valor2").value);

    let n = 0;
    let soma = 0;
    let sequencia = "";

    for(let k = 1; k <= num; k++){
        
        n = n * 10 + 1;
        soma += n;
        sequencia += n;

        if(k < num){
            sequencia += " + ";
        }
    }   
        document.getElementById("sequencia").innerHTML += sequencia;
        document.getElementById("resultado3").innerHTML += "Resultado = " + soma;
}

function limpar3(){

    document.getElementById("sequencia").innerHTML = "";
    document.getElementById("resultado3").innerHTML = "";
}

/*-------------------------------------------------------------------------------------------------------------*/

// Eventos que cada botão faz:

let botao1 = document.getElementById("botao1");
botao1.onclick = function(){
    aleatorio(1, 20);
    alert("Pronto! O número foi sorteado. Agora é só adivinhar!");
    botao1.style.backgroundColor = "gray";
}

let botao2 = document.getElementById("botao2");
botao2.onclick = function(){
    escolherPPT();
}