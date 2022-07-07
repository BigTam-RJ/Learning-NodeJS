import fetch from 'node-fetch';

const apiUrl = 'https://swapi.dev/api';

async function getPeople(page = 1){
    const response = await fetch(`${apiUrl}/people?page=${page}`); //formato utilizado para buscar mais de 1 página
    const people = await response.json();

    return people.results; //parâmetro results é específico dessa API, visto conforme documentação
}

export { getPeople };