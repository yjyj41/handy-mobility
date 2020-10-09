mapboxgl.accessToken =
  "pk.eyJ1IjoidXJiYW4xOSIsImEiOiJja2cxcXRhdGQwMWpxMnBudmx1NTNwbjRlIn0.gnAlbtjDvQX3KJWoTMAvDw";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/urban19/ckg1r29zg02kk19m6cavvn9z3", // stylesheet location
  center: [127, 37.5], // starting position [lng, lat]
  zoom: 13, // starting zoom
  minZoom: 13,
});
