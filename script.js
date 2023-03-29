const computerOptionShow=document.getElementById("computer")
const userOptionShow=document.getElementById("player")
const resultDisplay=document.getElementById("result")
const possibleItems=document.querySelectorAll("button")
let userOption
let userWin=0
let totalGames=0

possibleItems.forEach(possibleItem=>possibleItem.addEventListener("click", (e) => {
	if(totalGames<3&&userWin<2){
	userOption=e.target.id
	userOptionShow.innerHTML=userOption
	generateComputerOption()
	getResult()
	totalGames++
	}
}))

function generateComputerOption(){
	const randomNumber=Math.floor(Math.random()*3)+1

	if(randomNumber===1){
		computerOption="rock"
	}
	if(randomNumber===2){
		computerOption="scissors"

	}
	if(randomNumber===3){
		computerOption="paper"
	}
	computerOptionShow.innerHTML=computerOption
}

function getResult(){
	if (computerOption===userOption){
		result="It's a draw!"
	}
	if (computerOption==="rock" && userOption==="paper"){
		result="You win!"
	}
	if (computerOption==="rock" && userOption==="scissors"){
		result="You lose!"
	}
	if (computerOption==="paper" && userOption==="scissors"){
		result="You win!"
	}
	if (computerOption==="paper" && userOption==="rock"){
		result="You lose!"
	}
	if (computerOption==="scissors" && userOption==="rock"){
		result="You win!"
	}
	if (computerOption==="scissors" && userOption==="paper"){
		result="You lose!"
	}
	resultDisplay.innerHTML=result
	
}