$(document).ready(function () {
    $("#btnAjax").on("click", getPersonList);

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
