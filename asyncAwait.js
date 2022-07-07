/* para instalar a dependência que faz requisições as APIs
npm intall node-fetch depois importar no .js
import fetch from "node-fetch" */

import fetch from "node-fetch"

/* fazendo uma requisição à API do GitHub trabalhando com Promise e Node-fetch */
function main1() {
    const user = 'BigTam-RJ';
    const apiUrl = 'https://api.github.com';
    fetch(`${apiUrl}/users/${user}`)
        .then((response) => {
            return response.json();
        }).then((user) => {
            console.log(user);
        });
}

/* fazendo a mesma requisição à API do GitHub, agora utilizando AsycAwait */
async function main2() {
    const user = 'rprrafa';
    const apiUrl = 'https://api.github.com';
    const response = await fetch(`${apiUrl}/users/${user}`);
    const gitHubUser = await response.json();
    console.log(gitHubUser);
}

/* fazendo 2 ou mais requisições independentes em paralelo utilizando Promises e AsycAwait */
async function main3() {
    const user1 = 'BigTam-RJ';
    const user2 = 'rprrafa';
    const apiUrl = 'https://api.github.com';
    const promise1 = fetch(`${apiUrl}/users/${user1}`);
    const promise2 = fetch(`${apiUrl}/users/${user2}`);
    const promises = await Promise.all([promise1, promise2]);
    const gitHubUser1 = await promises[0].json();
    const gitHubUser2 = await promises[1].json();
    /* console.log(`Nome: ${gitHubUser1.name} ID: ${gitHubUser1.id}`);
    console.log(`Nome: ${gitHubUser2.name} ID: ${gitHubUser2.id}`); */

    /* utilizando "for in" para percorrer "propriedades" do array */
    for (const key in gitHubUser1) {
        console.log(key);
    }

    /* utilizando "for in" para percorrer "elementos" das propriedades do array */
    for (const key in gitHubUser1) {
        if (Object.hasOwnProperty.call(gitHubUser1, key)) {
            const element = gitHubUser1[key];
            console.log(element);
        }
    }

    /* utilizando "for of" para percorrer valores de objetos iterativos
    array, string */
    const alunos = ['Rafael', 'Fernanda', 'Gabriel', 'Jorge'];

    for (const iterator of alunos) {
        console.log(iterator);
    }

}

/* main2();
main1(); */
main3();

