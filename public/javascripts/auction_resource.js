var app = angular.module('ahNotifier.resource',['ngResource','ahNotifier.config']);

app.factory(['Auctions','environment', function($resource,environment) {
  var endpoint = "http://localhost:3000/api/auctions/:id";
  return $resource(endpoint,{'query': {method: 'GET', isArray: false }});
}]);
