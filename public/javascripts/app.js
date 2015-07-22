angular.module('ahNotifier', ['ngTable','ngResource'])
.factory('Auctions',["$resource",function($resource) {
  var Auctions = {};
  Auctions.get = function() {
    var endpoint = "http://localhost:3000/api/auctions/:id";
    return $resource(endpoint,{'query': {method: 'GET', isArray: false }});
  }
  return Auctions;
}])
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
