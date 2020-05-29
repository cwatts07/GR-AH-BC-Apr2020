const letters = document.getElementById('textLetters')
const numbers = document.getElementById('textNumbers')

document.getElementById('numbers').addEventListener('click',(event)=>{
    event.preventDefault();
    numbers.classList.remove('hide-me');
    letters.classList.add('hide-me');
})

document.getElementById('letters').addEventListener('click',(event)=>{
    event.preventDefault();
    numbers.classList.add('hide-me');
    letters.classList.remove('hide-me');
})

document.getElementById('menuButton').addEventListener('click',()=>{
    document.getElementById('menu').classList.toggle('show-me');
})