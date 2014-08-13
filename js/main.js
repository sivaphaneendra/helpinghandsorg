var helpmodule=angular.module('helpmodule',['ngRoute','ui.bootstrap']);

helpmodule.config(['$routeProvider',function($routeProvider){
  $routeProvider.when('/home',{
          templateUrl:'home.html',
          controller:'helpmaincontroller'})
          .when('/events',{
          templateUrl:'events.html',
          controller:'helpmaincontroller'})
          .when('/gallery',{
          templateUrl:'gallery.html',
          controller:'helpmaincontroller'})
	  .when('/services',{
          templateUrl:'services.html',
          controller:'helpmaincontroller'})
	  .when('/contact',{
          templateUrl:'contact.html',
          controller:'helpmaincontroller'})   
          .otherwise({
           redirectTo:'/home'
         });
}]);


helpmodule.controller('helpmaincontroller',['$scope','$window','$location','$anchorScroll', function($scope,$window,$location,$anchorScroll) {
 $scope.slides=[{img:'GalleryImages/1.jpeg'},{img:'GalleryImages/2.jpeg'},{img:'GalleryImages/3.jpeg'}];

 $scope.scrollAfterHeader=function(id){
   $location.hash(id);
   $anchorScroll();
 };

}]);

