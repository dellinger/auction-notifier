var app = angular.module('ahNotifier');

app.factory('Auctions',["$resource",function($resource) {
  var Auctions = {};
  Auctions.get = function() {
    var endpoint = "http://localhost:3000/api/auctions/:id";
    return $resource(endpoint,{'query': {method: 'GET', isArray: false }});
  }
  return Auctions;
}])
