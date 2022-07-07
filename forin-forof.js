import { getPeople } from './starsWarsService.js';

/* 3 maneiras de percorrer e buscar os elementos das propriedades do Array */
async function main() {
    let starsWarsPeople = await getPeople(1); //basta alterar o "1" para percorrer as outras páginas

    /* buscando os valores das propriedade com o "for in" */
    console.log("======= INICIO LISTA 1 ========");
    for (let i = 0; i < starsWarsPeople.length; i++) {
        console.log(starsWarsPeople[i].name);
    }
    console.log("======= FIM LISTA 1 ========");

    starsWarsPeople = await getPeople(2);
    /* buscando os valores das propriedade com o "for in" */
    for (const key in starsWarsPeople) {
        console.log(starsWarsPeople[key].name);
    }
    console.log("======= FIM LISTA 2 ========");

    starsWarsPeople = await getPeople(3);
    /* buscando os valores das propriedade com o "for of" */
    for (const key of starsWarsPeople) {
        console.log(key.name);
    }
    console.log("======= FIM LISTA 3 ========");
}

main();