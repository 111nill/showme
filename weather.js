const COORDS = "coords";

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coords));
}

function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = postion.coords.longitude;
  const coordObj = {
    latitude: latitude,
    longitude: longitude
  };
}
saveCoords(coordsObj);

function handleGeoError() {
  console.log("can access geo location");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const loadedCords = localStorage.getItem(COORDS);
  if (loadedCords === null) {
    askForCoords();
  } else {
    //getWeather
  }
}

function init() {
  loadCoords();
}

init();
