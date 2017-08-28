angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      var newEntry = new Object();
      newEntry.code = $scope.newCode;
      newEntry.name = $scope.newName;
      newEntry.coordinates = new Object();
      newEntry.coordinates.latitude = $scope.newLatitude;
      newEntry.coordinates.longitude = $scope.newLongitude;
      newEntry.address = $scope.newAddress;
   
      $scope.listings.push(newEntry);

      $scope.newCode = '';
      $scope.newName = '';
      $scope.newLatitude = '';
      $scope.newLongitude = '';
      $scope.newAddress = '';
    };
    $scope.deleteListing = function(item) {
      var index = $scope.listings.indexOf(item);
      $scope.listings.splice(index,1);
    };
    $scope.showDetails = function(item) {
     
      $scope.detailedInfo = new Object();
      $scope.detailedInfo.code = item.code;
      $scope.detailedInfo.name = item.name;
      $scope.detailedInfo.latitude = item.coordinates.latitude;
      $scope.detailedInfo.longitude = item.coordinates.longitude;
      $scope.detailedInfo.address = item.address;
      
    };
  }
]);