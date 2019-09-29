function watchLogoutButton(){
	$('.logout-btn').on('click', function(){
		localStorage.clear();
		window.location = '/';
	});
}

function postScore(userScore){
	fetch("/entries/scores", {
		method: "POST",
		body: JSON.stringify(userScore),
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer '+localStorage.authToken
		}
	})
	.then(res=> {
		if(res.ok){
			return res.json;
		}
		throw new Error(res.statusText);
	})
	.then(data=>{
		console.log(data); 
	})
	.catch(err=>{
		console.log(err);
	});
}

function putScore(userScore){
	fetch(`/entries/scores/${localStorage.user_id}`, {
		method: "PUT",
		body: JSON.stringify(userScore),
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer '+localStorage.authToken
		}
	})
	.then(res=> {
		if(res.ok){
			return res.json;
		}
		throw new Error(res.statusText);
	})
	.then(data=>{
		console.log(data);
	})
	.catch(err=>{
		console.log(err);
	});
}

function deleteScore(){
	fetch(`/entries/scores/${localStorage.user_id}`, {
		method: "DELETE",
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer '+localStorage.authToken
		}
	})
	.then(res=> {
		if(res.ok){
			return res.json;
		}
		throw new Error(res.statusText);
	})
	.then(() => {
		highestScore = 0;
	})
	.catch(err=>{
		console.log(err);
	});
}

$(()=>{
	if(localStorage.authToken){
		getScores(localStorage.user_id);
		watchLogoutButton();
	}
	else{
		// if not logged in and player accesses this page, redirect to login.
		location.replace("/index.html");
	}
});




let highestScore = 0;
let targettedElement = 'board';
let targettedElementsClass;
let currentElement;
let swappableId = ["item1", "item2", "item3", "item4", "item5"];
let swappableId2 = ["item6", "item7", "item8", "item9", "item10"];
let swappableId3 = ["item11", "item12", "item13", "item14", "item15"];
let iterator = 0;
let iterator2 = 0;
let iterator3 = 0;

$("#board").on('click', function(event) {
	event.preventDefault();
	targettedElement = event.target.getAttribute('id');
	elementSelector();
})




function elementSelector() {
	console.log(targettedElement);
	currentElement = document.getElementById(targettedElement).classList;
	elementValueUpdater();
	currentElement.add("pulse");
	while(document.getElementsByClassName("pulse").length > 1) {
		if(document.getElementsByClassName("pulse")[1].id != targettedElement) {
			document.getElementsByClassName("pulse")[1].classList.remove("pulse");
		}
		else if(document.getElementsByClassName("pulse")[0].id != targettedElement) {
			document.getElementsByClassName("pulse")[0].classList.remove("pulse");
		}
	}
	console.log("ID:", targettedElement, "Classes:", currentElement);
}

function elementValueUpdater() {
	let testArr = [];
	let buttonIdHolder = ["heightPlus", "widthPlus", "flexDirection", "flexWrap", "justifyContent", "alignItems", "alignContent", "alignSelf", "order", "flexGrow", "flexShrink", "flexBasis"];
	$.each(currentElement, function(index, value) {
		testArr.push(value);
	});
	testArr.splice(0, 1);
	for(i=0;i<12;i++) {
		let buttonName = buttonIdHolder[i];
		document.getElementById(buttonName).innerHTML = testArr[i];
	}
}

function watchAddElement(){
	$('#addElement').on('click', function(e){
		e.preventDefault();
		if(targettedElement == "board") {
			let divL = document.createElement('div');
			divL.id = swappableId[iterator];
			divL.classList.add("largestElement", "height:20%", "width:20%", "flex-direction:row", "flex-wrap:nowrap", "justify-content:flex-start", "align-items:stretch", "align-content:stretch", "align-self:auto", "order:0", "flex-grow:0", "flex-shrink:1", "flex-basis:auto");
			document.getElementById(targettedElement).appendChild(divL);
			iterator++;
			if(iterator == 5) {
				iterator = 0;
			}
			console.log("Largest element created!");
		}
		else if(document.getElementById(targettedElement) == undefined || document.getElementById(targettedElement) == null) {
			let divL = document.createElement('div');
			divL.id = swappableId[iterator];
			divL.classList.add("largestElement", "height:20%", "width:20%", "flex-direction:row", "flex-wrap:nowrap", "justify-content:flex-start", "align-items:stretch", "align-content:stretch", "align-self:auto", "order:0", "flex-grow:0", "flex-shrink:1", "flex-basis:auto");
			document.getElementById('board').appendChild(divL);
			iterator++;
			if(iterator == 5) {
				iterator = 0;
			}
			console.log("Largest element created!");
		}

		else if(document.getElementById(targettedElement).classList.contains("largestElement")) {
			let divM = document.createElement('div');
			divM.id = swappableId2[iterator2];
			divM.classList.add("mediumElement", "height:20%", "width:20%", "flex-direction:row", "flex-wrap:nowrap", "justify-content:flex-start", "align-items:stretch", "align-content:stretch", "align-self:auto", "order:0", "flex-grow:0", "flex-shrink:1", "flex-basis:auto");
			document.getElementById(targettedElement).appendChild(divM);
			iterator2++;
			if(iterator2 == 5) {
				iterator2 = 0;
			}
			console.log("Medium element created!");
		}
		else if(document.getElementById(targettedElement).classList.contains("mediumElement")) {
			let divS = document.createElement('div');
			divS.id = swappableId3[iterator3];
			divS.classList.add("smallElement", "height:20%", "width:20%", "flex-direction:row", "flex-wrap:nowrap", "justify-content:flex-start", "align-items:stretch", "align-content:stretch", "align-self:auto", "order:0", "flex-grow:0", "flex-shrink:1", "flex-basis:auto");
			document.getElementById(targettedElement).appendChild(divS);
			iterator3++;
			if(iterator3 == 5) {
				iterator3 = 0;
			}
			console.log("Small element created!");
		}
		else {
			console.log("Error in watchAddElement");
		}
	});	
	$('#removeElement').on('click', function(e){
		e.preventDefault();
		if(targettedElement == "newContainer") {
			console.log("Element removed!");
			isThereAlreadyAnElement = "no";
			document.getElementById(targettedElement).remove();
		}
		else if(targettedElement == "board") {
			console.log("I'm sorry, Dave.  I cannot let you do that.");
		}
		else {
			console.log("Element removed!");
			document.getElementById(targettedElement).remove();
		}
	});
	$('#resetBoard').on('click', function(event) {
		event.preventDefault();
		isThereAlreadyAnElement = "no";
		document.getElementById('startGameButton').innerHTML = "Start Game!";
		$('#board').html("");
		$('#gameBoard').html("");
	});
}


// startGame();
watchAddElement();
elementResizer();
flexDirectionController();
flexWrapController();
justifyContentController();
alignItemsController();
alignContentController();
alignSelfController();
orderController();
flexGrowController();
flexShrinkController();
flexBasisController();


$('.flexButton').on('click', function() {
	console.log("Flex button watcher working!");
	elementValueUpdater();
	puzzleCompleted();
});

$(document).ready(function() {
	targettedElement = "board";
	document.getElementById('board').classList.add("pulse");	
});

$('.selectorButtons').on('click', (event) => { 
	console.log(event.currentTarget.id)
	let whichButton = event.currentTarget.id
	let possibleChildNodes = ["board", "item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9", "item10", "item11", "item12", "item13", "item14", "item15"];
	if(whichButton === "previousElement") {
		possibleChildNodes.reverse();
	}
	let pulseSelector = document.querySelector('.pulse').id;

	if(possibleChildNodes.includes(pulseSelector)) {
		let pulsingIndex = possibleChildNodes.indexOf(pulseSelector)
		let nextPulsingId = possibleChildNodes.find((eachNode, nodeIndex) => {
			let index2use = "#" + eachNode
			if(nodeIndex > pulsingIndex && document.querySelector(index2use) != null) {
				return index2use
			}
		})
		if(nextPulsingId === undefined) {
			nextPulsingId = possibleChildNodes.find((eachNode, nodeIndex) => {
				let index2use = "#" + eachNode
				if(nodeIndex < pulsingIndex && document.querySelector(index2use) != null) {
					return index2use
				}
			})
		}

		console.log(nextPulsingId)
		targettedElement = nextPulsingId;
		elementSelector();
	}
})


//-------------------------things still needing completion----------------------------------------
//finalize styling
//clean up code
//INSTEAD OF BORDERS LAYERING ON TOP OF EACH OTHER, HAVE EACH NESTED LAYER SHRINK BORDER INSIDE
//CHANGE START BUTTON TO BE "NEXT LEVEL" AFTER USED THE FIRST TIME
//boxes to be filled flashing instead of currently selected one.  currently selected has a noticeable color
//change buttons to be: +   -   --   <-   ->
//adjust answers to be more precise
//transition between colors each round?
//ON WIN, LARGE/MED/SMALL ELEMENTS GET WHITE BACKGROUND COLOR AND 3PX BOX SHADOW
//next level highlights green to show you can progress
//border size smaller so double and solid are more differentiated


//-------------------------styling options for the finale--------------------------------------

//have listener for if button text changes, button flashes red?
//hint button to hightlight correct answer buttons