$(document).ready(function(){
    $("#latence").on("click", function(){
      callLatence().then(callLatence);
    });
    $("#error").on("click", function(){
      callLatence().then(callError);
    });

    function callLatence(){
      var promise = new Promise(function(resolve, reject){
        $.get('/latence')
          .done(function(data){
            console.log("call latence with success");
            resolve(data);
          })
          .fail(function(error){
            console.log("call latence with error");
            reject(error);
          })
      })
      return promise;
    }
    function callError(){
      var promise = new Promise(function(resolve, reject){
        $.get('/error')
          .done(function(data){
            console.log("call error with success");
            resolve(data);
          })
          .fail(function(error){
            console.log("call error with error");
            reject(error);
          })
      })
      return promise;
    }

});
