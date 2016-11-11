var map, heatmap;
$(document).ready(function() {
  getData(2011,2016, []);

  $('input:radio').change(function() {
    value = $("input[name='year']:checked").val();
    getData(value);
  });
  $('#btn_year').click(function(e) {
    e.preventDefault();
    var start = $("#year-from-selector").val();
    var end = $("#year-to-selector").val();
    //
    // var checkbox = document.getElementById()
    var boroughs = [];
    $('.mycheckbox:checkbox:checked').each(function(){
        boroughs.push($(this).val());
    });
    getData(start, end, boroughs);
  });
});

function getData(start, end, boroughs) {
  // var where_clause = "compstat_year >= " + start + " AND compstat_year <= " + end + " AND borough = '" + borough + "'";
  var borough_append = "";
  if (boroughs.length > 0) {
      for(i=0; i<boroughs.length; i++) {
        //last one, don't add the OR
        if (i==boroughs.length - 1) {
          borough_append += "borough='" + boroughs[i] + "'";
        }
        //add the OR
        else {
          borough_append += "borough='" + boroughs[i] + "' OR ";
        }
      }
    borough_append += " AND ";
  }

  var year_append = "compstat_year >= " + start + " AND compstat_year <= " + end;
  var where_clause = borough_append + year_append;
  console.log(borough_append);
  console.log(where_clause);

  $.ajax({
    url: "https://data.cityofnewyork.us/resource/e4qk-cpnv.json",
    type: "GET",
    data: {
      // "$where" : "within_circle(location_1, 40.758, -73.978, 1000)",
      // "$offense_classification" : "FELONY",
      "$select" : "location_1",
      "$where" : "offense_classification='FELONY' AND " + where_clause,
      "$limit" : 50000,
      "$$app_token" : "V395n3GKn9hE2JJvItf6Sygpt"
    },
    success: function(data) {
      console.log("success");
      console.log(data.length);
      initMap(data);
    }
  });
}

function initMap(data) {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.758, lng: -73.978},
    zoom: 14,
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_BOTTOM
    },
    mapTypeControl: true,
    mapTypeId: 'satellite'
  });
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(data),
    map: map
  });
  changeRadius();
}

function changeRadius() {
  heatmap.set('radius', heatmap.get('radius') ? null : 16);
}

function getPoints(data) {
  var array = [];
  // array.push(new google.maps.LatLng(40.758816,-73.978227));
  // array.push(new google.maps.LatLng(40.758820,-73.978237));
  // array.push(new google.maps.LatLng(40.758830,-73.978247));
  // array.push(new google.maps.LatLng(40.758846,-73.978257));
  // array.push(new google.maps.LatLng(40.758856,-73.978267));
  // array.push(new google.maps.LatLng(40.758866,-73.978277));

  var coord;
  for(i=0; i<data.length; i++) {
    //coord = new google.maps.LatLng(data[i].location_1.coordinates[1], data[i].location_1.coordinates[0]);
    coord = {location: new google.maps.LatLng(data[i].location_1.coordinates[1], data[i].location_1.coordinates[0]), weight: 1}
    array.push(coord);
  }

  return array;
}

function MapOverlay(bounds, image, map) {
  this.bounds_ = bounds;
  this.image_ = image;
  this.map_ = map;
  this.div_ = null;
  this.setMap(map);
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
