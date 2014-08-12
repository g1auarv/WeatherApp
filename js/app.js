
var app=angular.module('weather',[
   // WeatherApp.controllers
  ]);
app.controller('WeatherController', function($scope,$http){
  $scope.details={};
  $scope.imagesrc="http://openweathermap.org/img/w/";
  $http.get("http://api.openweathermap.org/data/2.5/weather?q=NEW DELHI,in&APPID=92725b615a39169992fbc1ed875188f2&units=metric").then(function(response){
           $scope.details=response.data;
           $scope.imagesrc=$scope.imagesrc+$scope.details.weather[0].icon+".png";
           $scope.temp=Math.round($scope.details.main.temp);
           //console.log($scope.details.weather[0].icon);
          // console.log($scope.details.weather);
  });
});

app.controller('ForecastController', function ($scope, $http){
    $scope.forecast={};
    $scope.imagesrc1="http://openweathermap.org/img/w/";
    $scope.imagesrc2="http://openweathermap.org/img/w/";
    $scope.imagesrc3="http://openweathermap.org/img/w/";
   $scope.getForecastData=function(){
   // alert("xyz");
     $http.get("http://api.openweathermap.org/data/2.5/forecast?q=NEW DELHI,in&APPID=92725b615a39169992fbc1ed875188f2&units=metric").then(function(response){
                $scope.forecast=response.data;
                $scope.imagesrc1=$scope.imagesrc1+$scope.forecast.list[3].weather[0].icon+".png";
                $scope.temp1=Math.round($scope.forecast.list[3].main.temp);
                $scope.imagesrc2=$scope.imagesrc2+$scope.forecast.list[6].weather[0].icon+".png";
                $scope.temp2=Math.round($scope.forecast.list[6].main.temp);
                $scope.imagesrc3=$scope.imagesrc3+$scope.forecast.list[9].weather[0].icon+".png";
                $scope.temp3=Math.round($scope.forecast.list[9].main.temp);
  });
   };
});
app.directive('forecastTile',function(){
  return{
            restrict: 'E',
            templateUrl:'forecast-tile.html'
  };
});
app.directive('modalBody',function(){
  return{
            restrict: 'E',
            templateUrl:'modal-body.html'
  };
});


