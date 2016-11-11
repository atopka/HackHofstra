var map, heatmap;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.758, lng: -73.978},
    zoom: 16
  });
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map
  });
}

function getPoints() {
  return [
    new google.maps.LatLng(40.758816,-73.978227),
    new google.maps.LatLng(40.758817,-73.978228),
    new google.maps.LatLng(40.758818,-73.978229),
    new google.maps.LatLng(40.758819,-73.978230),
    new google.maps.LatLng(40.758820,-73.978231),
    new google.maps.LatLng(40.758821,-73.978232)
  ];
}


// var map, heatmap;


// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 13,
//       center: {lat: 40.758, lng: -73.978}
//     });

    // heatmap = new google.maps.HeatMap(document.getElementById("map"), {
    //   data = getPoints(),
    //   map: map
    // });
//} //end initmap

// function getPoints() {
//   //TODO: get from data
//   return [
//     new google.maps.LatLng(40.758816, lng: -73.978227),
//     new google.maps.LatLng(40.758817, lng: -73.978228),
//     new google.maps.LatLng(40.758818, lng: -73.978229),
//     new google.maps.LatLng(40.758819, lng: -73.978230),
//     new google.maps.LatLng(40.758820, lng: -73.978231),
//     new google.maps.LatLng(40.758821, lng: -73.978232),
//   ];
// }
