'use strict';

export default function routes($stateProvider) {
  'ngInject';
  $stateProvider
    .state('student-dash', {
      url: '/student-dashboard',
      template: require('./student-dash/student-dash.html'),
      controller: 'StudentDashController',
      controllerAs: 'vm',
      authenticate: true
    })
    .state('school-dash', {
      url: '/school-dashboard',
      template: require('./school-dash/school-dash.html'),
      controller: 'SchoolDashController',
      controllerAs: 'vm',
      authenticate: true
    })
    .state('rec-dash', {
      url: '/recommender-dashboard',
      template: require('./rec-dash/rec-dash.html'),
      controller: 'RecDashController',
      controllerAs: 'vm',
      authenticate: true
    });
}
