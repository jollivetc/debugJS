class Person{
    firstName : String;
    lastName : String;
    
    constructor (firsName : String, lastName : String){
        this.firstName = firsName;
        this.lastName = lastName;
    }
    
    greet(){
        console.log('hello my name is %s %s', this.firstName, this.lastName);
    }
    
    throwError(){
        throw new Error("Ouch !");
    }
}
 
window.onload = () => {
    var person = new Person('John', 'Doe');
    
    document.getElementById('btnLog').addEventListener('click', function(){
        person.greet();
    });
    document.getElementById('btnThrow').addEventListener('click', function(){
        person.throwError();
    });
};