const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',   
    },
    params: {
        api_key: API_KEY,
    }
});