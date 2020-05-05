const name1 = "Archer";
const name2 = "Kirk";
const name3 = "Picard";

const max = Math.max(name1.length, name2.length, name3.length);
const biggestNames = [];
if(name1.length === max){
    biggestNames.push(name1);
}
if(name2.length === max){
    biggestNames.push(name2);
}
if(name3.length === max){
    biggestNames.push(name3);
}
if(biggestNames.length > 1){
    console.log(`The longest names are ${biggestNames.join(', ')}`);
}else{
    console.log(`The longest name is ${biggestNames[0]}`);
}
