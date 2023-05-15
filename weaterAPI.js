const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',   
    },
    params: {
        appid: API_KEY,
    }
});

let currentPosition = {};

function getPosition() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

async function getWeather ({lat, lng}) {
        const {data} = await api(`weather?lat=${lat}&lon=${lng}`);
        console.log(data);    
}

async function showWeaterCurrentPosition() {
    try {
      currentPosition = await getPosition();      
      setTimeout(() => {
        if (currentPosition) {
          const {latitude, longitude} = currentPosition.coords;
          getWeather({lat: latitude, lng: longitude});
        } else {
          console.log('current position aviable');
        }
      }, 3000);
    } catch (error) {
      console.log('Error getting position:', error);
      getWeather({lat: 20.7503, lng: -156.5003});
    }
  }
  
  showWeaterCurrentPosition();