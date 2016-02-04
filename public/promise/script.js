$(document).ready(function(){
    $("#latence").on("click", function(){
      callLatence()
        .then(callLatence);
    });
    $("#error").on("click", function(){
      callLatence()
        .then(callError);
    });

    function callLatence(){
      var promise = new Promise(function(resolve, reject){
        $.get('/latence')
          .done(function(data){
            console.log("called latence and received 2xx");
            resolve(data);
          })
          .fail(function(error){
            console.log("called latence and received 4xx or 5xx");
            reject(error);
          })
      })
      return promise;
    }
    function callError(){
      var promise = new Promise(function(resolve, reject){
        $.get('/error')
          .done(function(data){
            console.log("called error and received 2xx");
            resolve(data);
          })
          .fail(function(error){
            console.log("called error and received 4xx or 5xx");
            reject(error);
          })
      })
      return promise;
    }

});
