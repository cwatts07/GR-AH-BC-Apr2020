/*
● Add the "big" class to the "grow-me" paragraph.
● Remove the "big" class to the "shrink-me" paragraph.
● Find all the <li>s and log their text content to the console.
● Set the href of the link to "https://www.example.com" and update the text to say
"somewhere" instead of "nowhere".
● Set the "display" CSS property of the "hide-me" paragraph to "none".
● Set the "display" CSS property of the "show-me" paragraph to "block".
● Get the text that the user enters into the "name" input box and use it to set a welcome
message in the <h1>, e.g., "Hello Grant!".
*/
function main(){
    document.getElementById('grow-me').classList.toggle("big");
    document.getElementById('shrink-me').classList.toggle("big");
    document.querySelectorAll('li').forEach((el)=>{
        console.log(el.textContent);
    })
    const lis = document.querySelectorAll('li')
    for(let el of lis){
        console.log(el.textContent);
    }
    lis.forEach((el)=>{
        console.log(el.textContent);
    })
    const link = document.querySelector('a');
    link.setAttribute('href','https://www.example.com');
    link.textContent= 'somewhere';
    document.getElementById("hide-me").setAttribute('style',"display:none");
    //document.getElementById("hide-me").style.display = 'none';
    document.getElementById("show-me").setAttribute('style',"");
    //document.getElementById("show-me").style.display = 'block';
    const name = document.getElementById('name').value;
    document.querySelector('h1').textContent = `Hello ${name}`;
}