

export async function fetchSports() {
    const headers = {
        'X-RapidAPI-Key': '02ab298786mshfa6b33a6e2e382ap157d6ejsn015b9c68d25a',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
        headers:headers,
    });
    const result = await response.json();

    return result;
}

