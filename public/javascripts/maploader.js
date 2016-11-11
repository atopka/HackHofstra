var map, heatmap;
$(document).ready(function() {
  getData(2000,2016, []);

  $('input:radio').change(function() {
    value = $("input[name='year']:checked").val();
    getData(value);
  });
  $('#location-selector').change(function(){
    value = $(this).val();
    var lat, lng;
    switch (value) {
      case "Rockefeller Center":
        lat = 40.758992;
        lng = -73.978717;
      break;
      case "Times Square":
        lat = 40.759114;
        lng = -73.985174;
      break;
      case "Trump Tower":
        lat = 40.762762;
        lng = -73.973826;
      break;
      case "Lincoln Center":
        lat = 40.772708;
        lng = -73.983532;
      default:
        lat = 40.7727;
        lng = -73.9835;
    };
    console.log(lat);
    console.log(lng);
    var position = new google.maps.LatLng(lat, lng);
    //var position = new google.maps.LatLng(40.773, -73.984);
    map.panTo(position);
    map.setZoom(18);
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

  $('#btn_criteria').click(function(e) {
      e.preventDefault();
      var crime_weight = $("input[name='crime']:checked").val();
      var recycling_weight = $("input[name='recycling']:checked").val();
      getDataFromJson();
      //getCrimeData(crime_weight, recycling_weight);
      //change weights based on value

  });
});

function getDataFromJson() {
  // var data = JSON.parse(data);
  // console.log(data);
  // var points = [];
  // var coord;

  // for(i=0; i<data.length; i++) {
  //   coord = {location: new google.maps.LatLng(data[i].Points["lat"], data[i].Points["lon"]), weight: data[i].Points["val"]};
  //   array.push(coord);
  // }
  // finalMapInit(points);


  // $.get("conf/json.txt", function(data) {

  //   for(i=0; i<data.length; i++) {
  //     //coord = new google.maps.LatLng(data[i].location_1.coordinates[1], data[i].location_1.coordinates[0]);
  //     coord = {location: new google.maps.LatLng(data[i].Points["lat"], data[i].Points["lon"]), weight: data[i].Points["val"]};
  //     array.push(coord);
  //   }
  //   finalMapInit(points);
  // }, 'text')
  $.getJSON("json.txt", function(json) {
    var points = [];
    $.get("json.txt", function(data) {

    }, 'text');

    finalMapInit(points);
  });
}

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
      // "$where" : "offense_classification='FELONY' AND " + where_clause,
      "$where" : where_clause,
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

function newGetData() {
  $.ajax({
    type: "SOMETHING",
    url: "something",
    success: function(data) {
      newInitMap(data);
    }
  });
}

function newInitMap(data) {
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
    data: newGetPoints(data),
    map: map
  });
  changeRadius();
}

// function newGetPoints(data) {
//   var array = [];
//   var coord;
//   for(i=0; i<data.length; i++) {
//     //coord = new google.maps.LatLng(data[i].location_1.coordinates[1], data[i].location_1.coordinates[0]);
//     coord = {location: new google.maps.LatLng(data[i].Points["lat"], data[i].Points["lon"), weight: data[i].Points["val"]};
//     array.push(coord);
//   }
//   return array;
// }

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
  heatmap.set('radius', heatmap.get('radius') ? null : 20);
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

function getCrimeData(crime_weight, recycling_weight) {
//ajax call, call recycling data
  $.ajax({
    url: "https://data.cityofnewyork.us/resource/e4qk-cpnv.json",
    type: "GET",
    data: {
      "$select" : "location_1",
      "$where" : "compstat_year > 2000",
      "$limit" : 50000,
      "$$app_token" : "V395n3GKn9hE2JJvItf6Sygpt"
    },
    success: function(data) {
      getRecyclingData(data, crime_weight, recycling_weight);
    }
  });
}

function getRecyclingData(data, crime_weight, recycling_weight) {
  //ajax call, call map init

  //first, push crime data points
  var all_points = [];
  var coord;
  for(i=0; i<data.length; i++) {
    //coord = new google.maps.LatLng(data[i].location_1.coordinates[1], data[i].location_1.coordinates[0]);
    coord = {location: new google.maps.LatLng(data[i].location_1.coordinates[1], data[i].location_1.coordinates[0]), weight: 1};
    all_points.push(coord);
  }


  //second get recycling data paints
  $.ajax({
    url: "https://data.cityofnewyork.us/resource/ggvk-gyea.json",
    type: "GET",
    data: {
      "$select" : "latitude, longitude",
      "$where" : "compstat_year > 2000",
      "$limit" : 50000,
      "$$app_token" : "V395n3GKn9hE2JJvItf6Sygpt"
    },
    success: function(data) {
      for(i=0; i<data.length; i++) {
        //coord = new google.maps.LatLng(data[i].location_1.coordinates[1], data[i].location_1.coordinates[0]);
        coord = {location: new google.maps.LatLng(data[i].latitude, data[i].longitude), weight: 1};
        all_points.push(coord);
      }
      finalMapInit(all_points);
    }
  });
}

function finalMapInit(points) {
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
    data: points,
    map: map
  });
  changeRadius();
}
