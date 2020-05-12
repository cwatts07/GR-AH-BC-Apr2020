let i = 0
let myTimeout  = setInterval(()=>{
    console.log("I have run")
    if(i>5){
        clearInterval(myTimeout)
    }
    i++;
},1000);
console.log("I have run also");
async function test(){
    await fetch()
}

console.log("After fetch")