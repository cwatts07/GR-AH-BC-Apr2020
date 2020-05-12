//Function Declaration
function logOutHello(){
    
    return 'Hello'
}

//Function Expression
const lotMeOut = function(me){
    let hello = logOutHello()
    return hello + me 
}

//Arrow Function with 2 parameters
const randomDamage = (armor) => {
    //returns a random integer between 1 and 10.
    let damage = Math.floor(Math.random() * Math.floor(9) + 1);
    damage = damage - armor;
    if(damage < 0){
        damage = 0;
    }
    return damage;
}
console.log(randomDamage());

//Function Declaration
function isDead(){
    //logic goes here
}
//Function Expression
const myFunc = function(){
    //logic goes here
}
//Arrow Function
const myArrowFunc = (param, test) => {
    //logic goes here
}

const array1 = [1,2,3,4];

array1.map((value)=>{
    
})