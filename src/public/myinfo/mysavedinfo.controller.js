(function(){
  "use strict";
  angular.module('public')
  .controller("MySavedInfoController" , MySavedInfoController);
  MySavedInfoController.$inject = ['MySavedInfoService']
  function MySavedInfoController (MySavedInfoService){
    var con = this;
    con.isregistered = MySavedInfoService.isregistered;
    if(con.isregistered == true){
      con.firstname = MySavedInfoService.retrieveInfo()['firstname'];
      con.lastname = MySavedInfoService.retrieveInfo()['lastname'];
      con.email = MySavedInfoService.retrieveInfo()['email'];
      con.phonenumber = MySavedInfoService.retrieveInfo()['phonenumber'];
      con.favitem =  MySavedInfoService.retrieveInfo()['favcat'];
      console.log(con.favitem);
      MySavedInfoService.retrieveFavoriteCat(con.favitem).then(function(response){
        con.favcatItem = response;

      });
      con.imageserver = "https://www.davidchuschinabistro.com/images/";
      con.imgageaddress = con.imageserver + con.favitem + ".jpg";
    }

  }
})();
