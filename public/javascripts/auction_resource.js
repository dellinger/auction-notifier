var app = angular.module('ahNotifier');

app.factory('Auctions', function($resource) {
  var endpoint = "http://localhost:3000/api/auctions/:id";
  return $resource(endpoint,{'query': {method: 'GET', isArray: false }});
});