/* global angular */

function WelcomeCtrl() {
  var self = this;
  self.hello_world = "Hello WelcomeCtrl";
}

angular.module('lyceum').controller('WelcomeCtrl', [WelcomeCtrl]);
