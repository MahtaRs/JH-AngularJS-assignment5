(function(){
  "use strict";
  angular.module("public")
  .service("MySavedInfoService" , MySavedInfoService);
  MySavedInfoService.$inject = ['$http','ServerAPI'];
  function MySavedInfoService($http , ServerAPI){
    var service = this;
    service.savedInfo;
    service.isregistered = false;
    service.favitem;
    service.saveInfo = function(info){
      service.savedInfo = info;
      service.isregistered = true;
    }
    service.retrieveInfo = function (){
      return service.savedInfo;
    }
    service.retrieveFavoriteCat = function(shortName){
      return $http({
        method: "GET",
        url: (ServerAPI + "menu_items/" + shortName + '.json')
      }).then(function(response) {
        return response.data;
      }, function(response) {
        return false;
      });
    }
  }
})();
