let numberOfCircles =1;
function follow(event){
    for(let i=1; i <= numberOfCircles; i++){ 
        setTimeout(()=>{
            setPosition(event.x,event.y,i);
        },100*i)
    }
}

function setPosition(x,y,i){
    const circle = document.getElementById(i)
    circle.style.top = y + 'px'
    circle.style.left = x + 'px'
}

document.getElementById('up').addEventListener('click',()=>{
    const circles = document.getElementById('circles');
    if(circles.value < 25){
        circles.value++;
    }
});
document.getElementById('down').addEventListener('click',()=>{
    const circles = document.getElementById('circles');
    if(circles.value > 1){
        circles.value--;
    }
});
const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
function start(){
    startBtn.removeEventListener('click',start)
    numberOfCircles = document.getElementById('circles').value;
    for(let i = 1; i <= numberOfCircles; i++){
        let newCircle = document.createElement('div');
        newCircle.setAttribute('id',i);
        newCircle.classList.add('circle');
        document.body.appendChild(newCircle);
    }
    stopBtn.addEventListener('click',stop)
    document.addEventListener('mousemove',follow);
}
function stop(){
    stopBtn.removeEventListener('click',stop);
    document.removeEventListener('mousemove',follow);
    document.querySelectorAll('.circle').forEach((el)=>{
        el.remove();
    })
    startBtn.addEventListener('click',start);
}

startBtn.addEventListener('click',start);



