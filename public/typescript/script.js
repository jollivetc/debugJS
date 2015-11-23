var Person = (function () {
    function Person(firsName, lastName) {
        this.firstName = firsName;
        this.lastName = lastName;
    }
    Person.prototype.greet = function () {
        console.log('hello my name is %s %s', this.firstName, this.lastName);
    };
    Person.prototype.throwError = function () {
        throw new Error("Ouch !");
    };
    return Person;
})();
window.onload = function () {
    var person = new Person('John', 'Doe');
    document.getElementById('btnLog').addEventListener('click', function () {
        person.greet();
    });
    document.getElementById('btnThrow').addEventListener('click', function () {
        person.throwError();
    });
};
//# sourceMappingURL=script.js.map