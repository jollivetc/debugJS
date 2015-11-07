var person = {
    name : "Christophe",
    sayHello: function(){
        console.log("hello my name is "+ this.name);
    }
};
$(document).ready(function () {
    $("#btnHello").on("click", function(){
        person.sayHello();
    });
    $("#btnCode").on("click", function(){
        $("#code").show();
        var editor = CodeMirror.fromTextArea(document.getElementById("textArea"), {
            mode: "javascript"
        });
    })

    $("#btnAjax").on("click", getPersonList);

    function getPersonList() {
        $.getJSON("/json/person.json", function(data){
            console.log(data);
        })
    };
});
