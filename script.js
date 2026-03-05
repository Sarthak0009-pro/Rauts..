let totalSeconds = 0
let secondsLeft = 0
let timer = null

function startTimer(){

let min = document.getElementById("minutes").value

if(secondsLeft === 0){
if(min <= 0) return
totalSeconds = min * 60
secondsLeft = totalSeconds
}

clearInterval(timer)

timer = setInterval(()=>{

secondsLeft--

updateDisplay()

let percent=((totalSeconds-secondsLeft)/totalSeconds)*100
document.getElementById("bar").style.width=percent+"%"

if(secondsLeft<=0){
clearInterval(timer)
playSound()
}

},1000)

}

function pauseTimer(){
clearInterval(timer)
}

function resetTimer(){
clearInterval(timer)
secondsLeft=0
document.getElementById("bar").style.width="0%"
updateDisplay()
}

function updateDisplay(){

let min=Math.floor(secondsLeft/60)
let sec=secondsLeft%60

min=min<10?"0"+min:min
sec=sec<10?"0"+sec:sec

document.getElementById("time").innerText=min+":"+sec
}

function playSound(){
let audio=new Audio("https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg")
audio.play()
}

updateDisplay()
function voiceStart(){

if(!('webkitSpeechRecognition' in window)){
alert("Voice recognition not supported in this browser")
return
}

const recognition = new webkitSpeechRecognition()

recognition.lang = "en-US"
recognition.start()

recognition.onresult = function(event){

let speech = event.results[0][0].transcript.toLowerCase()

let number = speech.match(/\d+/)

if(number){
let minutes = parseInt(number[0])

secondsLeft = minutes * 60
totalSeconds = secondsLeft

updateDisplay()
startTimer()
}

}

}
