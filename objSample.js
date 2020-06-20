const obj = {test:1, something:2};
const obj2 = {test:1};
for(let key of Object.keys(obj)){
    if(obj2.hasOwnProperty(key)){
        console.log(key);
        console.log(obj[key]);
    }else{
        console.log(key, "Doesn't exist on this object");
    }
}