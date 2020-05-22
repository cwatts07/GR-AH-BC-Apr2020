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
// function myFunc(a,b,c,...rest){
//     console.log(rest);
// }
// const obj1 = {name:"Test", age:2, other:{test1:'Test1', test2:'Test2'}};
// const obj2 = {music:"Jazz", anotherProperty: "Yup", name:"My Name"};
// const obj3 = {...obj1,...obj2};
// const arr = [1,11,111,1111]
// myFunc(2,3,...arr)
// console.log(obj3);
// function objectChanger(obj){
//     obj.other = "I was changed";
// }
// const [test1, test2,test3] = arr;
// const {name, age, other} = obj1
// console.log(test1, test2, test3);
// other.test1 = 'I changed';
// console.log(name, age, other);
// console.log(obj1);
// objectChanger(obj1);
// console.log(obj1);

const myArr = [1,2,3,4,5,6,7,8,9,10];
console.log(myArr.indexOf(3));
// let test = myArr.reduce((previousVal, currentVal)=>{
//     console.log('Previous',previousVal);
//     console.log('Current',currentVal);
//     return previousVal + currentVal;
// })
// console.log('Final', test);

// let filteredResults = myArr.filter((item)=>{
//     return item % 2 === 0;
// });
// console.log(filteredResults);
// let alivePlayers=myPlayers.filter((player)=>{
//     return player.health >0;
// });
// console.log(alivePlayers);
// let firstDead = myPlayers.find((player)=>{
//     return player.health > 0;
// });
// console.log(firstDead);

// let firstDeadIndex = myPlayers.findIndex((player)=>{
//     return player.health === 0;
// });
// console.log(firstDeadIndex);
// myPlayers.splice(firstDeadIndex,1);
// console.log(myPlayers)

const myPlayers = [{name:"Chirpus", health:100, lowHeath:false},{name:"Chirpus1", health:90, lowHeath:false},{name:"Chirpus2", health:80, lowHeath:false},{name:"Chirpus3", health:0, lowHeath:true}]


