var App = angular.module('App', []);

App.controller('postsController', function($scope, $http) {
  $http.get('api/posts.json')
       .then(function(res){
          $scope.posts = res.data.posts;
          console.log($scope.posts);
      });

  $scope.getSingle = function (id) {
    $http.get('api/posts/' + id + '.json').then(function (result) {
      $scope.singlePost = result.data.post;
      console.log($scope.singlePost);

    })
  };
});
