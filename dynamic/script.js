var person = {
    name : "Christophe",
    sayHello: function(){
        console.log("hello je suis "+ this.name);
    }
};
$(document).ready(function () {
    prettyPrint();
    $("#btnHello").on("click", function(){
        person.sayHello();
    });
    $("#btnCode").on("click", function(){
        $("#code").show();
    })

    $("#btnAjax").on("click", getPersonList);
    
    function getPersonList() {
        $.getJSON("/json/person.json", function(data){
            console.log(data);
        })
    };
});