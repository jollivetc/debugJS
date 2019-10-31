$(document).ready(function () {
    document.getElementById('btnAjax').addEventListener('click', buttonClicked);
    $('#btnException').on('click', throwException);
    $('#result').hover(function () {
        console.log('hover');
    });

    function buttonClicked(){
        console.log('button was clicked')
        getPersonList();
    }

    function getPersonList() {
        $.getJSON('/json/person.json', appendPerson)
    };

    var appendPerson= (function () {
        const list = $('#personList');
        return function (data) {
            data.forEach(function(person){
                appendItem(person,list);
            });
        };

    })()
    function appendItem(person, list) {
        list.append('<li>' + person.name + ' ' + person.age + '</li>');
        console.log('element appended at %s', new Date().toGMTString());
    }

    function throwException(){
        throw {message: 'you asked for it'};
    }
});
