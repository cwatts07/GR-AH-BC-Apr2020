// let myH1 = document.querySelector('h1');
// myH1.style.color = 'green';
// myH1.style.fontSize = '80px';
// document.querySelector('body').style.backgroundColor = 'yellow';
// // setTimeout(()=>{
// //     myH1.style.left = '300px';
// //     myH1.style.top = '300px';
// // },2000);
// myH1.addEventListener('mouseover',(event)=>{
//     myH1.style.left += '100px';
//     myH1.style.top = '100px';
// })
// document.addEventListener('contextmenu',(e)=>{
//     e.preventDefault();
//     alert('No No, uh uh');
// })
let myUl = document.getElementById('myUl');
const removeItem = (event)=>{
    console.log(event);
    if(event.target.nodeName === 'LI'){
        event.target.remove();
    }
}
myUl.addEventListener('click',removeItem)
// document.querySelectorAll('li').forEach((el)=>{
//     el.addEventListener('click',removeItem);
// })
let i = 2;
function buttonClick(event){
    event.stopPropagation();
    const newEl = document.createElement('li');
    newEl.textContent = i;
    i++;
    // newEl.addEventListener('click',removeItem)
    myUl.appendChild(newEl);
}
document.querySelector('button').addEventListener('click',buttonClick)
