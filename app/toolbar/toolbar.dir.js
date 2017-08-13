(function(){
    'use strict';

    angular
        .module('ddcApp')
        .directive('toolbar', toolbar);

    function toolbar(){
        return {
            templateUrl: 'app/toolbar/toolbar.template.html',
            controller: toolbarController,
            controllerAs: 'toolbar'
        }
    }

    function toolbarController($cookies, $location,$scope){
        var vm = this;
        vm.login = login;
        vm.logout = logout;
        vm.email = "";
        vm.password = "";

        vm.loggedIn = $cookies.get('loggedIn');
        
        function login(){
            vm.loggedIn = $cookies.get('loggedIn');
        }
        function logout(){
            $cookies.remove('loggedIn');
            $cookies.remove('email');
            $cookies.remove('fname');
            $cookies.remove('lname');
            $cookies.remove('logintoken');
            $cookies.remove('authtoken');
            $cookies.remove('authexpiry');
            vm.loggedIn = false;;
            
            $location.path('/');
        }
        function showlogin(){
            $scope.loginModal = true;
            console.log("1");
        }

    }

})();