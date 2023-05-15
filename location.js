let currentPosition 

let getCurrentPosition = (position) => {
    currentPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    console.log(position);
}

const errorPosition = (error) => {
    console.log(error);
}

navigator.geolocation.getCurrentPosition(getCurrentPosition, errorPosition);