let myH1 = document.querySelector('h1');
myH1.style.color = 'green';
myH1.style.fontSize = '80px';
document.querySelector('body').style.backgroundColor = 'yellow';
// setTimeout(()=>{
//     myH1.style.left = '300px';
//     myH1.style.top = '300px';
// },2000);
myH1.addEventListener('mouseover',(event)=>{
    myH1.style.left += '100px';
    myH1.style.top = '100px';
})
document.addEventListener('contextmenu',(e)=>{
    e.preventDefault();
    alert('No No, uh uh');
})

