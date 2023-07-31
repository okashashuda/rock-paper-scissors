let YOUScore = 0;
let CPUScore = 0;
const YOUScore_span = document.getElementById("YOU-score");
const CPUScore_span = document.getElementById("CPU-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCPUChoice() {
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices [randomNumber];
}

function convertToWord(letter) {
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	if (letter === "s") return "Scissors";
}

function win(YOUChoice, CPUChoice) {
	YOUScore++;
	YOUScore_span.innerHTML = YOUScore;
	CPUScore_span.innerHTML = CPUScore;
	const smallYOUWord = "YOU".fontsize(3).sub();
	const smallCPUWord = "CPU".fontsize(3).sub();
	result_p.innerHTML = `${convertToWord(YOUChoice)}${smallYOUWord} beats ${convertToWord (CPUChoice)}${smallCPUWord}. You win!`;
	document.getElementById(YOUChoice).classList.add('green-glow');
	setTimeout (function() { document.getElementById(YOUChoice).classList.remove('green-glow') }, 300);
}

function lose(YOUChoice, CPUChoice) {
	CPUScore++;
	YOUScore_span.innerHTML = YOUScore;
	CPUScore_span.innerHTML = CPUScore;
	const smallYOUWord = "YOU".fontsize(3).sub();
	const smallCPUWord = "CPU".fontsize(3).sub();
	result_p.innerHTML = `${convertToWord(YOUChoice)}${smallYOUWord} loses to ${convertToWord (CPUChoice)}${smallCPUWord}. You lost...`;
	document.getElementById(YOUChoice).classList.add('red-glow');
	setTimeout (function() { document.getElementById(YOUChoice).classList.remove('red-glow') }, 300);
}

function draw(YOUChoice, CPUChoice) {
	const smallYOUWord = "YOU".fontsize(3).sub();
	const smallCPUWord = "CPU".fontsize(3).sub();
	result_p.innerHTML = `${convertToWord(YOUChoice)}${smallYOUWord} equals ${convertToWord (CPUChoice)}${smallCPUWord}. It's a draw.`;
	document.getElementById(YOUChoice).classList.add('gray-glow');
	setTimeout (function() { document.getElementById(YOUChoice).classList.remove('gray-glow') }, 300);
}


function game(YOUChoice) {
	const CPUChoice = getCPUChoice();
	switch (YOUChoice + CPUChoice) {
		case "rs":
		case "pr":
		case "sp":
			win(YOUChoice, CPUChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(YOUChoice, CPUChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
	 		draw(YOUChoice, CPUChoice);
			break;
	 }
}

function main() {
	rock_div.addEventListener('click', function() {
		game("r");
	})	

	paper_div.addEventListener('click', function() {
		game("p");
	})

	scissors_div.addEventListener('click', function() {
		game("s");
	})
}

main();


	

		