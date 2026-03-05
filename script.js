let totalSeconds = 0
let secondsLeft = 0
let timer = null

function startTimer(){
clearInterval(timer)

timer=setInterval(()=>{

secondsLeft--
updateDisplay()

let percent=((totalSeconds-secondsLeft)/totalSeconds)*100
document.getElementById("bar").style.width=percent+"%"

if(secondsLeft<=0){
clearInterval(timer)
}

},1000)
}

function resetTimer(){
clearInterval(timer)
secondsLeft=totalSeconds
updateDisplay()
document.getElementById("bar").style.width="0%"
}

function updateDisplay(){

let min=Math.floor(secondsLeft/60)
let sec=secondsLeft%60

min=min<10?"0"+min:min
sec=sec<10?"0"+sec:sec

document.getElementById("time").innerText=min+":"+sec
}
