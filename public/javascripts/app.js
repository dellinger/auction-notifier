var app = angular.module('ahNotifier', ['ngTable','ahNotifier.resource'])

.controller('ahQueryCtrl', ['$scope','Auctions','ngTableParams', function($scope,Auctions,ngTableParams){
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

  $scope.test = 'Hello world!';
}]);
