angular.module('alMakinah').controller('studentAuthController', function ($scope, $auth, $state, $window, AuthService, server) {

  $scope.login = function () {
    $auth.submitLogin($scope.loginForm, {
      config: 'student' // dont forget to add {config: 'student'}
    })
      .then(function (resp) {
        console.log(resp);
        AuthService.loginStudent(resp);
        $state.go('studentLayout.studentDash');

      })
      .catch(function (resp) {
        console.log(resp);
        $window.alert('Wrong Credintials!');

      });
  };
});

// angular.module('askMak').controller('studentAuthController', [ '$scope', 'AuthServic', function ($scope, Auth) {
//   //submit
//   $scope.login = function () {
//     // Ask to the server, do your job and THEN set the user
//
//     Auth.setUser(user); //Update the state of the user in the app
//   };
// }])
