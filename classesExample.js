class Student{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayHello(){
        console.log("Hello");
    }
    logOut(){
        console.log("out")
    }
}

class FrontEndStudent extends Student{
    constructor(name, age, framework){
        super(name, age);
        this.framework = framework;
    }
    sayHello(){
        console.log("Hello my name is,",this.name ,"and I am a front end student and my favorite framework is", this.framework);
    }
}
class AngularStudent extends FrontEndStudent{
    constructor(name, age){
        super(name, age, 'Angular');
    }
    extraMethod(){
        console.log("nothing");
    }
}
let feStudent = new FrontEndStudent("Grand Chirpus", 21, 'Angular');
// feStudent.sayHello();
// feStudent.logOut();
console.log(feStudent);
 let angularStudent = new AngularStudent("Captain Kirk", 45);
 console.log(angularStudent);
// angularStudent.sayHello();
// angularStudent.logOut();