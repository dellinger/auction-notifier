angular.module('ahNotifier', ['ngResource','smart-table'])

.controller('ahQueryCtrl', ['$scope','Auctions', function($scope,Auctions){
  $scope.realmName = '';
  $scope.auctions = [];
  Auctions.query(function(auctions){
     $scope.auctions = auctions.auctions.auctions;
  });

  $scope.test = 'Hello world!';
}]);
