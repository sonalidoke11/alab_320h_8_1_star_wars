
const BASE_URL = 'https://swapi.dev/api/';

//Use named exports to expose AJAX functionality as needed, e.g. export function getAllStarships() {...} to obtain all starships.

export async function getAllStarships(){
    try {
        const response = await fetch(`${BASE_URL}starships/`)
        if(response.ok){
            const data = await response.json();
            return data.results; // returns the list of starships
        }else{
            throw new Error('Response not ok')
        }
        console.log(response);
    } catch (error) {
        
    }
}