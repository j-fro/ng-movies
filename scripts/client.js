var myApp = angular.module('myApp', []);

myApp.controller('MovieController', ['$scope', '$http', function($scope, $http) {
    console.log('ng');

    $scope.getMovie = function() {
        console.log('getting a movie');
        var searchUrl = 'http://omdbapi.com/?s=' + $scope.movieIn;
        $http({
            method: 'GET',
            url: searchUrl,
        }).then(function(response) {
            console.log('Response:', response.data);
            $scope.searchResults = response.data.Search;
        });
    };
}]);
