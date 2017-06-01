// Generated by CoffeeScript 1.10.0
(function() {
  angular.module('alMakinah').config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    'ngInject';

  function CheckForAuthenticatedUser($auth, $state) {
    return $auth.validateUser().then(function (user) {
      // if resolved successfully return a user object that will set
      // the variable `resolvedUser`
      if (user.configName === 'manager') {
        return user;
      }
      $state.go('studentLayout.student');
    }, function () {
      $state.go('studentLayout.student');
    });
  }

  function CheckForAuthenticatedStudent($auth, $state) {
    return $auth.validateUser().then(function (user) {
      // if resolved successfully return a user object that will set
      // the variable `resolvedUser`
      if (user.configName === 'student') {
        return user;
      }
      $state.go('studentLayout.student');
    }, function () {
      $state.go('studentLayout.student');
    });
  }


    $locationProvider.html5Mode(true); // I added this line and the <base href="/"> in the html to get
    // rid of the '/#!/' in the url.

    // HOME STATES AND NESTED VIEWS ========================================
    $stateProvider
    // .state("dashboard", {
    //   abstract: true,
    //   templateUrl: "app/views/layouts/dashboard_layout.html",
    //   controller: "DashboardController"
    //  })
    //.state("dashboard.home", {
    //   url: "/",
    //   templateUrl: "app/views/dashboard/index.html"
    // })
      .state('studentLayout', {
        url: '/',
        templateUrl: 'app/views/student/student_layout.html',
        abstract: true
      })
      .state('studentLayout.student', {
        url: '',
        templateUrl: 'app/views/student/student_auth.html'
      })
      .state('studentLayout.studentAcceptInvitation', {
        url: '/accept/:token',
        templateUrl: 'app/views/student/student_accept_invitation.html'
      })
      .state('studentLayout.studentDash', {
        url: 'dash',
        templateUrl: 'app/views/student/student_dash.html'
      })
      .state('studentLayout.studentRequest', {
        url: '/request',
        templateUrl: 'app/views/student/student_request.html',
        resolve: {
          resolvedUser: CheckForAuthenticatedStudent
        }
      })
      .state('studentLayout.studentEditQuestion', {
        url: 'edit/question/{id:[0-9]{1,8}}',
        templateUrl: 'app/views/student/student_edit.html',
        resolve: {
          resolvedUser: CheckForAuthenticatedStudent
        }
      })
      .state('managerLayout', {
        url: '/manager',
        templateUrl: 'app/views/manager/manager_layout.html',
        abstract: true
      })
      // .state('managerLayout.homepage', {
      //   url: '',
      //   templateUrl: 'app/manager/auth/manager_auth.html'
      // })
    .state('managerLayout.manager', {
      url: '/auth',
      templateUrl: 'app/views/manager/manager_auth.html'
    })
    .state('managerLayout.managerInvite', {
      url: '/invite',
      templateUrl: 'app/views/manager/manager_invitation.html',
      resolve: {
        resolvedUser: CheckForAuthenticatedUser
      }
    })
    .state('managerLayout.managerDash', {
      url: '/dash',
      templateUrl: 'app/views/manager/manager_dash.html',
      resolve: {
        resolvedUser: CheckForAuthenticatedUser
      }
    })
   .state('managerLayout.managerMentorsList', {
     url: '/dash/mentors',
     templateUrl: 'app/views/manager/manager_mentors.html',
     resolve: {
       resolvedUser: CheckForAuthenticatedUser
     }
   })
   .state('managerLayout.managerMentorProfile', {
     url: '/dash/mentors/{id:[0-9]{1,8}}', // how to make it view the name of the mentor?
     templateUrl: 'app/views/manager/mentor_profile.html',
     resolve: {
       resolvedUser: CheckForAuthenticatedUser
     }
   })
   .state('managerLayout.managerStudents', {
     url: '/dash/students',
     templateUrl: 'app/views/manager/manager_students.html',
     resolve: {
       resolvedUser: CheckForAuthenticatedUser
     }
   })
    .state('mentorLayout', {
      url: '/mentor',
      templateUrl: 'app/views/mentor/mentor_layout.html',
      abstract: true
    })
    .state('mentorLayout.mentor', {
      url: '/auth',
      templateUrl: 'app/views/mentor/mentor_auth.html'
    })
    .state('mentorLayout.mentorAcceptInvitation', {
      url: '/accept/:token',
      templateUrl: 'app/views/mentor/mentor_accept_invitation.html'
    }).state('mentorLayout.mentorDash', {
      url: '/dash',
      templateUrl: 'app/views/mentor/mentor_dash.html',
      resolve: {
        resolvedUser: CheckForAuthenticatedUser
      }
    });

    $urlRouterProvider.otherwise('/');
});

}).call(this);
