//Function Declaration
function getAreaOfCircle(radius){
    return radius * radius * 3.14159;
}
//Arrow Function
const getCircumferenceOfCircle = (radius)=>{
    return 2 * Math.PI * radius;
}
//Function Expression
const getAreaOfSquare = function (side){
    return side * side;
}

function getAreaOfTriangle(height, base){
    return .5 * height * base
}

console.log(getAreaOfCircle(5));
console.log(getCircumferenceOfCircle(5));
console.log(getAreaOfSquare(5));
console.log(getAreaOfTriangle(5,5));
