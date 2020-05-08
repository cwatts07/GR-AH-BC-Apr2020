// const drinks = [["Tea", 'Peppermint'], {morning:"Coffee"}, 1,"Soda", "Water", "Beer", "Milk"];
// drinks.splice(2,3,'Item1','Item2','Item3');
// const drink = drinks.pop();
// const hotDrink = drinks.shift();
// console.log(drinks);
// console.log(drink);
// console.log(hotDrink);
// drinks.unshift(hotDrink);
// drinks.push(drink);
// drinks.splice(1,2,)
// console.log(drinks);
// const test = drinks.find(item =>{
//      return item.length > 4
//     })
// // test = drinks.find(item => item.length > 4)
// console.log(test);

// function addNumbers(...numbers){
//     console.log(numbers);
// }

// addNumbers(1);
// addNumbers(1,2,3,4,5,6,7,8,9,10,11,12,13);
// const tester = [[1,2,3,4,5,6,7],[8,9,10,11,12]]
// console.log(tester[0].unshift());
function myFunc(a,b,c,...rest){
    console.log(rest);
}
const obj1 = {name:"Test", age:2, other:{test1:'Test1', test2:'Test2'}};
const obj2 = {music:"Jazz", anotherProperty: "Yup", name:"My Name"};
const obj3 = {...obj1,...obj2};
const arr = [1,11,111,1111]
myFunc(2,3,...arr)
console.log(obj3);
function objectChanger(obj){
    obj.other = "I was changed";
}
const [test1, test2,test3] = arr;
const {name, age, other} = obj1
console.log(test1, test2, test3);
other.test1 = 'I changed';
console.log(name, age, other);
console.log(obj1);
objectChanger(obj1);
console.log(obj1);
