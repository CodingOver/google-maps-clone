mapboxgl.accessToken = 'pk.eyJ1IjoiY29uZGluZ292ZXIiLCJhIjoiY2tsbnBoeWhzMDYzdzJ3a2FzZGpnODlxbSJ9.nfzu33wF5wBTuCazNMIYiw';
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})
function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude]);
}
function errorLocation() {
}
function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    })
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken ,
      });   
      map.addControl(directions, "top-left");
}
