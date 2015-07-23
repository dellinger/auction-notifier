var app = angular.module('ahNotifier');

app.factory('Auctions',["$resource",function($resource) {
  var Auctions = $resource('http://localhost:3000/api/auctions/',{},
                {'query': {method: 'GET', isArray: false }});

  return Auctions;
}])
