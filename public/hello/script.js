$(document).ready(function(){
    $("#btnHello").on("click", function(){
        $("#spanHello").val("Hello "+ $("#inputName").val()); 
    });
});