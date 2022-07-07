/* caso seja necessário trabalhar com import e export, inserir no
package.json a linha "type": "module", (abaixo do "description" por exemplo)
OU criar no arquivo .js uma const fs = require('fs') */

import fs from 'fs';
import { promisify } from 'util'


/* Aqui vamos refatorar o exemplo do main.js, utilizando promises no lugar da callback */

/* função de Timeout com callback */
function mensagemAgua(callback) {
    setTimeout(() => {
        console.log("Beba Agua! (1)");
        callback();
    }, 0);
}

function mensagemFogo() {
    console.log("Cuidado, Fogo! (2)");
}

mensagemAgua(mensagemFogo); //imprime primeiro "Beba Agua! (1) e depois "Cuidado, Fogo! (2)"
                              //garantindo a ordem correta das chamadas (sincronismo)



/*  Agora, a função acima refatorada com promise -------------------------------------------------*/
function mensagemAgua2() {
    const promiseMensagemAgua = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Beba Agua! (1)");
            resolve();
        }, 0);
    });
    return promiseMensagemAgua;
}

function mensagemFogo2() {
    console.log("Cuidado, Fogo! (2)");
}

mensagemAgua2().then(mensagemFogo2);


/* Lendo um arquivo em JSON com calback -----------------------------------*/                              
let alunos;
fs.readFile('./alunos.json',(erro, dados) =>{
    if (erro) {
        console.error(erro);
        return;
    }
    alunos = JSON.parse(dados);
    console.log('alunos', alunos);
});

/* refatorando a função acima, agora utilizando a promise */
/* primeiro é necessário importar a biblioteca promisify
   import { promisify } from 'util' */
   /* Lendo um arquivo em JSON com calback*/                              
let alunos2;
const readFilePromise = promisify(fs.readFile);

readFilePromise('./alunos.json').then((dados) => {
    alunos2 = JSON.parse(dados);
    console.log('alunos', alunos2);
}).catch((erro) => {
    console.error(erro);
});
