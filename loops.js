// for(let i =1; i <= 10; i++){
//     console.log(i);
// }

// for(let i = 10; i >= 1; i--){
//     console.log(i);
// }
// let i = 1;
// while(i<=10){
//     console.log(i);
//     i++;
// }
// i = 10;
// while( i > 0){
//     console.log(i);
//     i--;
// }
// do{
//     console.log(i);
//     i++;
// }while(i<=10);
// i=10;
// do{
//     console.log(i);
//     i--;
// }while(i>0);
// const numbers = [1,2,3,4,5,6,7,8,9,10];
// for(let currentNumber of numbers){
//     console.log(currentNumber);
// }
// const myObject = {number1:1, aa:2, whatever:4};
// for(let key in myObject){
//     console.log(key);
// }

let word = 'planet';

// for(let i = word.length+1; i<10; i++){
//     word = ' ' + word;
// }
// console.log('>',word);

// while(word.length<9){
//     word = ' ' + word;
// }
// console.log('>',word);
const spaceNeeded = 10 - word.length;
for(let i = spaceNeeded; i>1; i--){
    word = ' ' + word;
}
console.log('>',word);