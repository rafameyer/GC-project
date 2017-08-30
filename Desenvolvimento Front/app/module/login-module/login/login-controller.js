app.controller('LoginCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();

   $rootScope.submitLogin = function(user, pass) {
       var username = user;
       var password = pass;

       console.log(username);
       console.log(password);       

       if (username != null && password != null) {
            $location.path('/alterar-senha');
        }
   }
});