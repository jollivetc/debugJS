$(document).ready(function () {
    $("#btnAjax").on("click", doAsynchronousThings);

    function doAsynchronousThings() {
        $.getJSON("/json/async.json", appendConf);
        setTimeout(logConfName, 300);
    };

    function appendConf(data) {
        $("#data").text(data.name);
    }

    function logConfName(){
        console.log("data value is " + $("#data").text());
    }
});
