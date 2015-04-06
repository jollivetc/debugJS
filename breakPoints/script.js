$(document).ready(function () {
    $("#btnAjax").on("click", getPersonList);

    $("#btnShow").on("click", function () {
        $("#personList").show();
    });
    $("#btnHide").on("click", function () {
        $("#personList").hide();
    });

    $("#result").hover(function () {
        console.log("hover");
    });

    function getPersonList() {
        $.getJSON("/json/person.json", appendPerson)
    };

    var appendPerson= (function () {
        var foo = "bar";
        return function (data) {
            console.log(foo);
            var list = $("#personList");
            data.forEach(function (person) {
                list.append("<li>" + person.name + " " + person.age + "</li>");
            })
        };

    })()
});