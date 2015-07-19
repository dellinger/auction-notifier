var app = angular.module('ahNotifier', ['ngResource','ngTable']);

app.controller('ahQueryCtrl', ['$scope','Auctions','ngTableParams', function($scope,Auctions,ngTableParams){
  $scope.realmName = '';
  $scope.auctions = {};
  $scope.tableParams = null;
  Auctions.get(function(auctions){
     var normalizedAuctions = auctions.auctions.auctions;
      $scope.tableParams = new ngTableParams(
               {page: 1, count: 10},
               {total: normalizedAuctions.length,
                        getData: function($defer, params) {
                           $defer.resolve(normalizedAuctions);
                         }
               });
  });




  var auctions = Auctions.get(function(one,two){
    $scope.realmName = one.realm.name;
    $scope.auctions = one.auctions.auctions;
  });

  $scope.test = 'Hello world!';
}]);
