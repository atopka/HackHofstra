// $(document).ready(function() {
//   $.ajax({
//     url: "https://data.cityofnewyork.us/resource/e4qk-cpnv.json",
//     type: "GET",
//     data: {
//       // "$where" : "within_circle(location_1, 40.758, -73.978, 1000)",
//       // "$offense_classification" : "FELONY",
//       "$select" : "location_1",
//       "$where" : "borough='MANHATTAN' AND offense_classification='FELONY' AND compstat_year > 2011",
//       "$limit" : 1000,
//       "$$app_token" : "V395n3GKn9hE2JJvItf6Sygpt"
//     },
//     success: function(data) {
//       console.log("success");
//       console.log("lat" + data[0].location_1.coordinates[0]);
//       console.log("lng" + data[0].location_1.coordinates[1]);
//     }
//   });
// });
