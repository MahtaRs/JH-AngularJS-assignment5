(function () {
  "use strict";
  angular.module("public")
  .controller("SignUpFVCntrl"  , SignUpFVCntrl);
  SignUpFVCntrl.$inject = ['FormVerificationService' , 'MySavedInfoService'];
  function SignUpFVCntrl(FormVerificationService , MySavedInfoService){
    var con = this;

    con.submitcatError = null;
    con.registeredUser = MySavedInfoService.isregistered;

    con.validateShortItem = function(shortName){
      var finder = FormVerificationService.shortNameVerifier(shortName);
      return finder;
    };
    con.register = function(){
      con.validateShortItem(con.cat.toUpperCase()).then(function(response){
        var parameters = {'firstname': con.firstname,'lastname': con.lastname,'email': con.email ,'phonenumber': con.phonenumber,'favcat': con.cat.toUpperCase()};

        if (response == true){
          MySavedInfoService.saveInfo(parameters);
          con.registeredUser = true;
          con.submitcatError = false;

        }else{
          con.submitcatError = true;
        }
      });
    }
  }
})();
