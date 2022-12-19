let inpSpeed=document.getElementById("inpSpeed")
let value1=document.getElementById('value1')
let value2=document.getElementById('value2')
let value3=document.getElementById('value3')
setInterval(()=>{
    value1.textContent=getRandomValue()
    value2.textContent=getRandomValue()
    value3.textContent=getRandomValue()
},inpSpeed.value*100)
let values=['😃','🥰','🫡','🫠','😊','😘','🥲','🤗','😰','😩']
function getRandomValue(){
    return values[Math.floor(Math.random()*10)]
}

inpSpeed.onchange = function(){
    document.documentElement.style.setProperty("--speed",inpSpeed.value)
}