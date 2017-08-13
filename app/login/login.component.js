// Register `productList` component, along with its associated controller and template
angular.
  module('login').
  component('login', {
    templateUrl:'app/login/login.template.html',
    controller: ['$http','$routeParams', '$location', '$cookies','$scope',
    function LoginController($http, $scope, $location, $cookies) {
      var self = this;
      $cookies.put('baseurl','http://localhost:8888/beinspired/');
      self.submitLogin = function(){
        var email = self.email;
        var password = self.password;
        var req = {
          method: 'POST',
          url: $cookies.get('baseurl') + 'profiles/login',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: 'email='+email+'&password='+password
        }
        $http(req).then(function(response){
          //validate credentials then save data
          if(response.data.result.success == true){
            $cookies.put('email', self.email);
            $cookies.put('loggedIn',true);
            $cookies.put('fname',response.data.result.first_name);
            $cookies.put('lname',response.data.result.last_name);
            $cookies.put('logintoken',response.data.result.token);
            window.location.href = '/productcentral';
          }else{
            alert("Sorry, email and/or password are incorrect.");
          }
        });
      };
  }]
});