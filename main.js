/* para atualizar o gerenciador de pacotes NPM
 npm install -g npm */

/* para criar um novo projeto node, primeiro inicializar o npm
npm init (npm init -y cria o arquivo com os valores default */


/* Função com um TimeOut (perde a ordem correta das chamadas das funções) ---------- */
function mensagemAgua1() {
    setTimeout(() => {
        console.log("Beba Agua! (1)");
    }, 0);
}

function mensagemFogo1() {
    console.log("Cuidado, Fogo! (2)");
}

mensagemAgua1(); //imprime primeiro "Cuidado, Fogo! (2)" e depois "Beba Agua! (1)"
mensagemFogo1(); //perdendo a ordem correta das chamadas


/* Agora a mesma chamada, com a Função de Callback ----------------------------------*/
/* Não é recomendado trabalhar com esse tipo de funçõe, dar preferência a Promises
   Promises são objetos para trabalharmos com o assincronismo em javascript */
function mensagemAgua2(callback) {
    setTimeout(() => {
        console.log("Beba Agua! (1)");
        callback();
    }, 0);
}

function mensagemFogo2() {
    console.log("Cuidado, Fogo! (2)");
}

mensagemAgua2(mensagemFogo2); //imprime primeiro "Beba Agua! (1) e depois "Cuidado, Fogo! (2)"
                              //garantindo a ordem correta das chamadas (sincronismo)