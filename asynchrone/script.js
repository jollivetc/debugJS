$(document).ready(function () {
    $("#btnAjax").on("click", doAsynchronousThings);

    function doAsynchronousThings() {
        $.getJSON("/json/conf.json", appendConf);
        setTimeout(logConfName, 300);
    };

    function appendConf(data) {
        $("#confName").text(data.name);    
    }
    
    function logConfName(){
        console.log("conf name is " + $("#confName").text());   
    }
});