(function(){
  "use strict";
  angular.module("public")
  .service("FormVerificationService" , FormVerificationService);
  FormVerificationService.$inject = ['$http','ServerAPI'];
  function FormVerificationService($http , ServerAPI){
    var service = this;
    service.shortNameVerifier = function(shortName){
      return $http({
        method: "GET",
        url: (ServerAPI + "menu_items/" + shortName + '.json')
      }).then(function(response) {
        return true;
      }, function(response) {
        return false;
      });
    }
  }
})();
