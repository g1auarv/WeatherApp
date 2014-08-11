
var app=angular.module('weather',[

'F1FeederApp.services'
	]);
app.controller('WeatherController', function($scope){
	this.city=details;
});
var details=

              {
              	"message":"accurate",
              	"cod":"200",
              	"count":2,
              	"list":[{
              		       "id":6058560,
              		       "name":"London",
              		       "coord":{"lon":-81.23304,"lat":42.983391},
              		       "main":{
              		       	         "temp":14.68,
              		       	         "pressure":1022,
              		       	         "humidity":87,
              		       	         "temp_min":14,
              		       	         "temp_max":16.11
              		       	     },
              	"dt":1407500086,
              	"wind":{
              		      "speed":1.5,
              		      "deg":30,
              		      "var_beg":350,
              		      "var_end":50
              		  },
              	"sys":{"country":"CA"},
              	"clouds":{"all":75},
              	"weather":[{
              		         "id":803,
              		         "main":"Clouds",
              		         "description":"broken clouds",
              		         "icon":"04d"
              		     }]
              		 },
              		 {
              		 	"id":2643743,
              		 	"name":"London",
              		 	"coord":{
              		 		       "lon":-0.12574,
              		 		       "lat":51.50853
              		 		   },
              		 	"main":{
              		 		      "temp":22.78,
              		 		      "pressure":1007,
              		 		      "humidity":69,
              		 		      "temp_min":20,
              		 		      "temp_max":25.56
              		 		  },
              		 	"dt":1407503903,
              		 	"wind":{
              		 		     "speed":1.5,
              		 		     "deg":0
              		 		    },
              		 	"sys":{"country":"GB"},
              		 	"clouds":{"all":40},
              		 	"weather":[{
              		 		         "id":802,
              		 		         "main":"Clouds",
              		 		         "description":"scattered clouds",
              		 		         "icon":"03d"}]
              		 		     }
              		 		     ]};


