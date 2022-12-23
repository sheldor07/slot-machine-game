let inpSpeed=document.getElementById("inpSpeed")
let value1=document.getElementById('value1')
let value2=document.getElementById('value2')
let value3=document.getElementById('value3')
let resAlert=document.getElementById('resAlert')
let btnSpin=document.getElementById('btnSpin')
let spinCount=0;

let values=['😃','🥰','🫡','🫠','😊','😘','🥲','🤗','😰','😩']
function getRandomValue(){
    return values[Math.floor(Math.random()*10)]
}

let animationId;
let animationNone=()=>{}
function updateAnimation(newSpeed) {
    animationId = setInterval(() => {
        value1.innerText = getRandomValue()
        value2.innerText = getRandomValue()
        value3.innerText = getRandomValue()
        console.log(spinCount)
        console.log(newSpeed)
        if(++spinCount===10){
            clearInterval(animationId)
            setTimeout(()=>{ checkWin(value1.innerText,value2.innerText,value3.innerText)},1000)
           
        }
    }, 1000 / newSpeed)
}
function checkWin(value1, value2, value3){
    if(value1===value2 && value2===value3){
        resAlert.textContent="You win!"
    }
    else if(value1===value2 || value2===value3 || value1===value3)
    {
        resAlert.textContent="Oof! So Close"
    }
    else{
        resAlert.textContent="What an L smh"
    }
}
btnSpin.onclick = ()=>{
    document.documentElement.style.setProperty("--speed",5)
    updateAnimation(5)
    

}
btnReset.onclick =()=>{
    value1.innerText = "❓"
    value2.innerText = "❓"
    value3.innerText = "❓"
    spinCount=0
    document.documentElement.style.setProperty("--speed",0)
    resAlert.innerText="Spin it!"
}