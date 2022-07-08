import { getPeople } from './starsWarsService.js';

/* 3 maneiras de percorrer e buscar os elementos das propriedades do Array */
async function main() {
    /* buscando os valores das propriedade com o "for" */
    let starsWarsPeople = await getPeople(1); //basta alterar o "1" para percorrer as outras páginas
    console.log("======= INICIO LISTA 1 ========");
    for (let i = 0; i < starsWarsPeople.length; i++) {
        console.log(starsWarsPeople[i].name);
    }

    /* buscando os valores das propriedade com o "for in" */
    console.log("======= INICIO LISTA 2 ========");
    starsWarsPeople = await getPeople(2);
    for (const key in starsWarsPeople) {
        console.log(starsWarsPeople[key].name);
    }

    /* buscando os valores das propriedade com o "for of" */
    console.log("======= INICIO LISTA 3 ========");
    starsWarsPeople = await getPeople(3);
    for (const key of starsWarsPeople) {
        console.log(key.name);
    }

    /* buscando os valores dos elementos (no exemplo os nomes) com o "map" */
    console.log("======= INICIO LISTA 4 ========");
    starsWarsPeople = await getPeople(4);
    const starsWarsPeopleNames = starsWarsPeople.map((person) => { return person.name });
    console.log(starsWarsPeopleNames);

    /* buscando os valores dos atributos (no exemplo os nomes e alturas) com o "map" */
    console.log("======= INICIO LISTA 5 ========");
    starsWarsPeople = await getPeople(5);
    const starsWarsPeopleAttributes = starsWarsPeople.map((person) => {
        const name = person.name;
        const height = person.height;
        return { name, height };
    });
    console.log(starsWarsPeopleAttributes);

    /* buscando os valores dos atributos (no exemplo os nomes, alturas e gênero) com o "map", utilizando destructor */
    console.log("======= INICIO LISTA 6 ========");
    starsWarsPeople = await getPeople(6);
    const starsWarsPeopleAttributes2 = starsWarsPeople.map((person) => {
        const { name, height, gender } = person; // desestruturação - pegamos 2 ou mais atributos e criamos variáveis de um objeto
        return { name, height, gender };
    });
    console.log(starsWarsPeopleAttributes2);

    /* filtrando os valores dos atributos (no exemplo somente do gênero 'male' e altura menor que 186) com o "filter" e "map" */
    console.log("======= INICIO LISTA 7 ========");
    starsWarsPeople = await getPeople(7);
    const starsWarsPeopleFiltered = starsWarsPeople
        .filter(person => {
            return (person.gender === 'male') && (person.height < 186); //aqui inserimos as condiçõs do filtro
        })
        .map((person) => {
            return { name: person.name, gender: person.gender, height: person.height };
        });
    console.log(starsWarsPeopleFiltered);

    /* Obtendo a média de altura das pessoas da lista utilizando o "reduce" */
    console.log("======= INICIO LISTA 8 ========");
    starsWarsPeople = await getPeople(8);
    const totalHeight = starsWarsPeople
        .reduce((total, person) => {
            total += Number(person.height);
            return total;
        }, 0);
    console.log(`Média de altura: ${totalHeight / starsWarsPeople.length} cm.`);
}

main();