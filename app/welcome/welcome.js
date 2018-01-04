(function() {
  'use strict';

  angular
    .module('app.welcome')
    .controller('Welcome', Welcome);

  function Welcome() {
    var vm = this;
    vm.message = 'Bienvenue dans ce test AngularJS !';
  }
})();