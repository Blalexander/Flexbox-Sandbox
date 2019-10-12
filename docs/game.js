let gameCompleted; //Flexbox Gameboard?
let scoreTracker = 0;
let onlySubmitGameOnce = 0; //each nested level denotes another layer on sandcastle.  border and colors chosen by layer
//next element and previous element buttons for primary way to swap

// function startGame() { //add slight border to left side to give sense of perspective for object you're working in
  $('#startGame').submit(function(event) {
		event.preventDefault();
		onlySubmitGameOnce = 1;
		document.getElementById('currentScore').innerHTML = "Current Score: " + scoreTracker;
		document.getElementById('startGameButton').innerHTML = "Next Level";
		$('#gameBoard').html("");
		$('#board').html("");		
		targettedElement = "board";
		elementSelector();
		document.getElementById('board').style.backgroundColor = "transparent";
		levelRandomizer();
  });
// }

function levelRandomizer() { //add diversity at least to where main container box appears
	let swappableGameIds = ["gameItem1", "gameItem2", "gameItem3", "gameItem4", "gameItem5"];
	
	let randMediums = Math.floor(Math.random() * 5) + 1;
	let randSmall = Math.floor(Math.random() * 5);
	let percentStorage = ["20%", "40%", "60%", "80%", "100%"];
	let randPercent = Math.floor(Math.random() * 6);

	document.getElementById('gameBoard').insertAdjacentHTML('beforeend', `<div id="containerDiv" class="containerDiv"></div>`);
	document.getElementById('containerDiv').style.height = percentStorage[randPercent];
	document.getElementById('containerDiv').style.width = percentStorage[randPercent];
	for(i=0;i<randMediums;i++) {
		document.getElementById('containerDiv').insertAdjacentHTML('beforeend', `<div id=${swappableGameIds[i]} class="mediumDiv"></div>`);
	}

	let randFlexNumber = Math.floor(Math.random() * 9);
	let randomizeFlexOptions = ["flexDirection", "flexWrap", "justifyContent", "alignItems", "alignContent", "alignSelf", "flexGrow", "flexShrink", "flexBasis"];
	let randFlexOption = Math.floor(Math.random() * 5);
	let fd = ["row", "row-reverse", "column", "column-reverse", "row", "column"];
	let fw = ["nowrap", "wrap", "wrap-reverse", "nowrap", "wrap", "wrap-reverse"];
	let jc = ["flex-start", "flex-end", "center", "space-evenly", "space-around", "space-between"];
	let ai = ["flex-start", "flex-end", "center", "stretch", "baseline", "stretch"];
	let ac = ["flex-start", "flex-end", "center", "stretch", "space-around", "space-between"];
	let as = ["flex-start", "flex-end", "center", "stretch", "baseline", "auto"];
	let fg = ["0", "1", "2", "3", "4", "4"];
	let fs = ["1", "2", "3", "4", "5", "5"];
	let fb = ["auto", "1", "2", "3", "4", "4"];



	for(i=0;i<5;i++) {
		let randFlexNumber = Math.floor(Math.random() * 9);
		let randFlexOption = Math.floor(Math.random() * 5);
		let selectedFlexOption = randomizeFlexOptions[randFlexNumber];


		switch(selectedFlexOption) {
			case "flexDirection":
			console.log("flexDirection");
				document.getElementById('containerDiv').style.flexDirection = fd[randFlexOption];
				break;
			case "flexWrap":
				console.log("flexWrap");
				document.getElementById('containerDiv').style.flexWrap = fw[randFlexOption];
				break;
			case "justifyContent":
				console.log("justifyContent");
				document.getElementById('containerDiv').style.justifyContent = jc[randFlexOption];
				break;
			case "alignItems":
				console.log("alignItems");
				document.getElementById('containerDiv').style.alignItems = ai[randFlexOption];
				break;
			case "alignContent":
				console.log("alignContent");
				document.getElementById('containerDiv').style.alignContent = ac[randFlexOption];
				break;
			case "alignSelf":
				console.log("alignSelf");
				document.getElementById('containerDiv').style.alignSelf = as[randFlexOption];
				break;
			case "flexGrow":
				console.log("flexGrow");
				document.getElementById('containerDiv').style.flexGrow = fg[randFlexOption];
				break;
			case "flexShrink":
				console.log("flexShrink");
				document.getElementById('containerDiv').style.flexShrink = fs[randFlexOption];
				break;
			case "flexBasis":
				console.log("flexBasis");
				document.getElementById('containerDiv').style.flexBasis = fb[randFlexOption];
				break;
			default:
				console.log("Default used!");
		}
	}

	let containerDivClasses = $('#containerDiv');
	console.log(containerDivClasses);
}

$('#resetScore').submit(function(event) {
	event.preventDefault();
	highestScore = 0;
	displayScores(highestScore);
	deleteScore();
});


function testChildNodes(itemChildNodes, containerDivChildNodes) {
	let leftTest = [];
	let topTest = [];
	let heightTest = [];
	let widthTest = [];
	

	for(i=0;i<itemChildNodes.length;i++) {
		if(itemChildNodes[i] && containerDivChildNodes[i]) {
			console.log(itemChildNodes[i].offsetLeft, containerDivChildNodes[i].offsetLeft);
			if(itemChildNodes[i].offsetLeft <= containerDivChildNodes[i].offsetLeft + 10 && itemChildNodes[i].offsetLeft >= containerDivChildNodes[i].offsetLeft - 10) {
				console.log("Left Pass!");
				leftTest.push("Pass");
			}
			else {
				console.log("Left Fail!");
				leftTest.push("Fail");
			}


			console.log(itemChildNodes[i].offsetTop, containerDivChildNodes[i].offsetTop);
			if(itemChildNodes[i].offsetTop <= containerDivChildNodes[i].offsetTop + 10 && itemChildNodes[i].offsetTop >= containerDivChildNodes[i].offsetTop - 10) {
				console.log("Top Pass!");
				topTest.push("Pass");
			}
			else {
				console.log("Top Fail!");
				topTest.push("Fail");
			}


			console.log(itemChildNodes[i].offsetWidth, containerDivChildNodes[i].offsetWidth);
			if(itemChildNodes[i].offsetWidth <= containerDivChildNodes[i].offsetWidth + 10 && itemChildNodes[i].offsetWidth >= containerDivChildNodes[i].offsetWidth - 10) {
				console.log("Width Pass!");
				widthTest.push("Pass");
			}
			else {
				console.log("Width Fail!");
				widthTest.push("Fail");
			}


			console.log(itemChildNodes[i].offsetHeight, containerDivChildNodes[i].offsetHeight);
			if(itemChildNodes[i].offsetHeight <= containerDivChildNodes[i].offsetHeight + 10 && itemChildNodes[i].offsetHeight >= containerDivChildNodes[i].offsetHeight - 10) {
				console.log("Height Pass!");
				heightTest.push("Pass");
			}
			else {
				console.log("Height Fail!");
				heightTest.push("Fail");
			}


			if(leftTest[i] == "Pass" && topTest[i] == "Pass" && widthTest[i] == "Pass" && heightTest[i] == "Pass") {
				document.getElementById(itemChildNodes[i].id).style.borderLeft = "5px solid cyan";
				document.getElementById(itemChildNodes[i].id).style.borderTop = "5px solid cyan";
				document.getElementById(itemChildNodes[i].id).style.borderRight = "5px solid cyan";
				document.getElementById(itemChildNodes[i].id).style.borderBottom = "5px solid cyan";
			}
			else {
				document.getElementById(itemChildNodes[i].id).style.borderLeft = "5px solid blue";
				document.getElementById(itemChildNodes[i].id).style.borderTop = "5px solid blue";
				document.getElementById(itemChildNodes[i].id).style.borderRight = "5px solid blue";
				document.getElementById(itemChildNodes[i].id).style.borderBottom = "5px solid blue";
			}
		}
	}


	let testAnswers = leftTest.concat(topTest, heightTest, widthTest);

	return testAnswers;
}

function testContainerNode(boardsChildNodes, gameBoardsChildNodes) {
	let leftTest = [];
	let topTest = [];
	let heightTest = [];
	let widthTest = [];
	

	for(i=0;i<boardsChildNodes.length;i++) {
		console.log(boardsChildNodes[i].offsetLeft, gameBoardsChildNodes[i].offsetLeft); //always logging "8 0"
		if(boardsChildNodes[i].offsetLeft <= gameBoardsChildNodes[i].offsetLeft + 10 && boardsChildNodes[i].offsetLeft >= gameBoardsChildNodes[i].offsetLeft - 10) {
			console.log("Left Pass!");
			leftTest.push("Pass");
		}
		else {
			console.log("Left Fail!");
			leftTest.push("Fail");
		}
	

		console.log(boardsChildNodes[i].offsetTop, gameBoardsChildNodes[i].offsetTop);
		if(boardsChildNodes[i].offsetTop <= gameBoardsChildNodes[i].offsetTop + 10 && boardsChildNodes[i].offsetTop >= gameBoardsChildNodes[i].offsetTop - 10) {
			console.log("Top Pass!");
			topTest.push("Pass");
		}
		else {
			console.log("Top Fail!");
			topTest.push("Fail");
		}
	

		console.log(boardsChildNodes[i].offsetWidth, gameBoardsChildNodes[i].offsetWidth);
		if(boardsChildNodes[i].offsetWidth <= gameBoardsChildNodes[i].offsetWidth + 10 && boardsChildNodes[i].offsetWidth >= gameBoardsChildNodes[i].offsetWidth - 10) {
			console.log("Width Pass!");
			widthTest.push("Pass");
		}
		else {
			console.log("Width Fail!");
			widthTest.push("Fail");
		}
	

		console.log(boardsChildNodes[i].offsetHeight, gameBoardsChildNodes[i].offsetHeight);
		if(boardsChildNodes[i].offsetHeight <= gameBoardsChildNodes[i].offsetHeight + 10 && boardsChildNodes[i].offsetHeight >= gameBoardsChildNodes[i].offsetHeight - 10) {
			console.log("Height Pass!");
			heightTest.push("Pass");
		}
		else {
			console.log("Height Fail!");
			heightTest.push("Fail");
		}


		if(leftTest[i] == "Pass" && topTest[i] == "Pass" && widthTest[i] == "Pass" && heightTest[i] == "Pass") {
			document.getElementById(boardsChildNodes[i].id).style.borderLeft = "5px solid cyan";
			document.getElementById(boardsChildNodes[i].id).style.borderTop = "5px solid cyan";
			document.getElementById(boardsChildNodes[i].id).style.borderRight = "5px solid cyan";
			document.getElementById(boardsChildNodes[i].id).style.borderBottom = "5px solid cyan";
		}
		else {
			document.getElementById(boardsChildNodes[i].id).style.borderLeft = "5px solid blue";
			document.getElementById(boardsChildNodes[i].id).style.borderTop = "5px solid blue";
			document.getElementById(boardsChildNodes[i].id).style.borderRight = "5px solid blue";
			document.getElementById(boardsChildNodes[i].id).style.borderBottom = "5px solid blue";
		}
	}

	let testAnswers = leftTest.concat(topTest, heightTest, widthTest);

	return testAnswers;
}


function puzzleCompleted() { 
		let boardsChildNodes = document.getElementById('board').childNodes;
		let gameBoardsChildNodes = document.getElementById('gameBoard').childNodes;
		let itemChildNodes = document.getElementById(targettedElement).childNodes;
		let containerDivChildNodes = document.getElementById('containerDiv').childNodes;

		let containerNodeTests = testContainerNode(boardsChildNodes, gameBoardsChildNodes);
		console.log(containerNodeTests);
		let childNodeTests = testChildNodes(itemChildNodes, containerDivChildNodes);
		console.log(childNodeTests);



		let testAgainstContainer = document.getElementById('gameBoard').childNodes.length;
		let testAgainstChild = document.getElementById('containerDiv').childNodes.length;
		let bothTests = testAgainstContainer + testAgainstChild;
		bothTests *= 4;
		let bothAnswers = containerNodeTests.concat(childNodeTests);
		console.log(bothAnswers, bothTests);

		if(bothAnswers.length == bothTests) {
			let testerr = bothAnswers.every(testItem => {
				if(testItem === "Fail") {
					return false;
				}
				else {
					return true;
				}
			}) 

			if(testerr == true && onlySubmitGameOnce === 1) {
				scoreTracker++;
				onlySubmitGameOnce = 0;
				if(scoreTracker > highestScore) { 
          highestScore = scoreTracker;
					putScore({scoreTracker, user: localStorage.authToken});
					console.log(scoreTracker, highestScore, "PUT")
				}
				else if(highestScore == 0) {
					highestScore = scoreTracker;
					postScore({scoreTracker, user: localStorage.authToken});
					console.log(scoreTracker, highestScore, "POST")
        }

				displayScores(highestScore);

				document.getElementById('currentScore').innerHTML = "Current Score: " + scoreTracker;
				document.getElementById('currentScore').classList.add('winner');
				setTimeout(() => {
					document.getElementById('currentScore').classList.remove('winner');
				}, 2000)
				console.log("WWWWIIIINNNNEEEERRRRR!");
			}
		}	
}