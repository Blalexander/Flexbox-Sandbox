function watchLogoutButton(){
	$('.logout-btn').on('click', function(){
		localStorage.clear();
		window.location = '/';
	});
}

function postEntry(entry){
	fetch("/entries", {
		method: "POST",
		body: JSON.stringify(entry),
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
		console.log(data); //data turns out to be "json()", only readable in networking tab
		// location.replace("/index.html");
	})
	.catch(err=>{
		// displayError();
		console.log(err);
	});
}

watchNewEntryForm();
clearCustomBackground();

function watchNewEntryForm(){
	$('#newEntry').submit(function(e){
		// $('.error').remove();
		e.preventDefault();
		let customBackground = $("#customBackground").val();
    document.getElementById('board').style.backgroundImage = `url(${customBackground})`;		
		postEntry({
			customBackground,
			user: localStorage.authToken
		});
	});
}

function clearCustomBackground() {
  $('#clearBackground').submit(function(e) {
    e.preventDefault();
    document.getElementById('board').style.backgroundImage = "none";		
  });
}

$(()=>{
	if(localStorage.authToken){
		// getEntry(localStorage.entryId);
		// watchEditForm();
		watchLogoutButton();
	}else{
		// if not logged in and player accesses this page, redirect to login.
		location.replace("/index.html");
	}
});





startGame();
let level = 1;
let fd = document.getElementById('flexDirection');
let fw = document.getElementById('flexWrap');
let jc = document.getElementById('justifyContent');
let ai = document.getElementById('alignItems');
let ac = document.getElementById('alignContent');
let as = document.getElementById('alignSelf');
// let ac = document.getElementById('alignContent');



function levelOne() {
  // for(i=0;i<4;i++) {
    document.getElementById('gameBoard').insertAdjacentHTML('beforeend', '<div id="mediumDiv" class="mediumDiv"></div>');
    document.getElementById('gameBoard').insertAdjacentHTML('beforeend', '<div id="smallDiv" class="smallDiv"></div>');
    document.getElementById('gameBoard').insertAdjacentHTML('beforeend', '<div id="tinyDiv" class="tinyDiv"></div>');
	// }
	let answerBox = ["mediumDiv", "smallDiv", "tinyDiv"];


  document.getElementById('gameBoard').style.flexDirection = "column";
  // document.getElementById('gameBoard').style.flexWrap = "wrap-reverse";
  document.getElementById('gameBoard').style.justifyContent = "center";
  document.getElementById('gameBoard').style.alignItems = "center";
  // document.getElementById('gameBoard').style.alignContent = "center";
	//RANDOMIZE VALUES????
	
	$('#endGame').submit(function(event) {
    event.preventDefault();
		levelOneComplete();
  });
}

function levelOneComplete() {
	// let testVal1 = document.getElementById('item1').getClientRects()[0];
	// let testSol1 = document.getElementById('mediumDiv').getClientRects()[0];

	// console.log(testVal1);
	// console.log(testSol1);

	let boardsChildNodes = document.getElementById('board').childNodes;
	let gameBoardsChildNodes = document.getElementById('gameBoard').childNodes;

	for(i=0;i<boardsChildNodes.length;i++) {
		let maxCorrectAnswer = gameBoardsChildNodes[i+1].offsetLeft + 10;
		let minCorrectAnswer = gameBoardsChildNodes[i+1].offsetLeft - 10;
		console.log(maxCorrectAnswer, minCorrectAnswer);

		if(boardsChildNodes[i].offsetLeft <= maxCorrectAnswer && boardsChildNodes[i].offsetLeft >= minCorrectAnswer) {
			console.log("Pass!");
		}
		else {
			console.log("Fail!");
		}
		// console.log(boardsChildNodes[i].id, boardsChildNodes[i].offsetLeft);
		// console.log(gameBoardsChildNodes[i+1].id, gameBoardsChildNodes[i+1].offsetLeft);
	}



	// $.each(currentElement, function(index, value) {
	// 	testArr.push(value);
	// });
	// testArr.splice(0, 1);
	// for(i=0;i<12;i++) {
	// 	let buttonName = buttonIdHolder[i];
	// 	document.getElementById(buttonName).innerHTML = testArr[i];
	// }
}

function startGame() {
  $('#startGame').submit(function(event) {
    event.preventDefault();
    $('#gameBoard').html(`<h1 id="levelDisplay">Level: ${level}</h1>`);
		document.getElementById('board').style.backgroundColor = "transparent";

    // document.getElementById('gameBoard').appendChild(gameDiv1);

    if(level === 1) {
      levelOne();
    }
    else if(level == 2) {
      // document.getElementById('gameBoard').appendChild(gameDiv1);
    }
    else if(level == 3) {
      // document.getElementById('gameBoard').appendChild(gameDiv1);
    }
    else {
      console.log("No level detected!");
    }
  });
}

let targettedElement;
let targettedElementsClass;
let currentElement;
let swappableId = ["item1", "item2", "item3", "item4", "item5"];
let swappableId2 = ["item6", "item7", "item8", "item9", "item10"];
let swappableId3 = ["item11", "item12", "item13", "item14", "item15"];
let iterator = 0;
let iterator2 = 0;
let iterator3 = 0;

function elementSelector() {
	$('#board').on('click', function(event) {
		if(event.target.getAttribute('id') != "boardBackground") {
			targettedElement = event.target.getAttribute('id');
			targettedElementsClass = event.target.getAttribute('class');
			currentElement = document.getElementById(targettedElement).classList;
			elementValueUpdater();
			document.getElementById(targettedElement).classList.add("pulse");
			while(document.getElementsByClassName("pulse").length > 1) {
				if(document.getElementsByClassName("pulse")[1].id != targettedElement) {
					document.getElementsByClassName("pulse")[1].classList.remove("pulse");
				}
				else if(document.getElementsByClassName("pulse")[0].id != targettedElement) {
					document.getElementsByClassName("pulse")[0].classList.remove("pulse");
				}
			}
			console.log("ID:", targettedElement, "Classes:", targettedElementsClass);
		}
		else {
			console.log("nope!");
		}
	});
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
      // USE SPREAD SYNTAX FOR ^ ARRAYS  
			document.getElementById(targettedElement).appendChild(divL);
			iterator++;
			if(iterator == 5) {
				iterator = 0;
			}
			console.log("Largest element created!");
		}
		else if(targettedElement == undefined || targettedElement == null) {
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
	$('#removeAll').on('click', function(event) {
		event.preventDefault();
		isThereAlreadyAnElement = "no";
		$('#board').html("");
	});
}

function elementResizer(){
	$('#heightPlus').on('click', function(e){
		e.preventDefault();
		// let heightArray = ["20%", "40%", "60%", "80%"];
		if(currentElement.contains('height:20%')) {
			currentElement.replace('height:20%', 'height:40%');
			document.getElementById(targettedElement).style.height = "40%";
			console.log(targettedElement, "height: 40%");
		}
		else if(currentElement.contains('height:40%')) {
			currentElement.replace('height:40%', 'height:60%');
			document.getElementById(targettedElement).style.height = "60%";
			console.log(targettedElement, "height: 60%");
		}
		else if(currentElement.contains('height:60%')) {
			currentElement.replace('height:60%', 'height:80%');
			document.getElementById(targettedElement).style.height = "80%";
			console.log(targettedElement, "height: 80%");
		}
		else if(currentElement.contains('height:80%')) {
			currentElement.replace('height:80%', 'height:100%');
			document.getElementById(targettedElement).style.height = "100%";
			console.log(targettedElement, "height: 100%");
		}
		else if(currentElement.contains('height:100%')) {
			currentElement.replace('height:100%', 'height:20%');
			document.getElementById(targettedElement).style.height = "20%";
			console.log(targettedElement, "height: 20%");
		}	
		else {
			console.log("error in heightPlus");
		}
	});
	
	$('#widthPlus').on('click', function(e){
		e.preventDefault();
		if(currentElement.contains('width:20%')) {
			currentElement.replace('width:20%', 'width:40%');
			currentElement.replace('width6', 'width:40%');
			document.getElementById(targettedElement).style.width = "40%";
			console.log(targettedElement, "width: 40%");
		}
		else if(currentElement.contains('width:40%')) {
			currentElement.replace('width:40%', 'width:60%');
			document.getElementById(targettedElement).style.width = "60%";
			console.log(targettedElement, "width: 60%");
		}
		else if(currentElement.contains('width:60%')) {
			currentElement.replace('width:60%', 'width:80%');
			document.getElementById(targettedElement).style.width = "80%";
			console.log(targettedElement, "width: 80%");
		}
		else if(currentElement.contains('width:80%')) {
			currentElement.replace('width:80%', 'width:100%');
			document.getElementById(targettedElement).style.width = "100%";
			console.log(targettedElement, "width: 100%");
		}
		else if(currentElement.contains('width:100%')) {
			currentElement.replace('width:100%', 'width:20%');
			document.getElementById(targettedElement).style.width = "20%";
			console.log(targettedElement, "width: 20%");
		}	
		else {
			console.log("error in widthPlus");
		}
	});
}

function flexDirectionController(){
	$('#flexDirection').on('click', function(e){
		e.preventDefault();
		if(currentElement.contains('flex-direction:column-reverse')) {
			currentElement.replace('flex-direction:column-reverse', 'flex-direction:row');
			document.getElementById(targettedElement).style.flexDirection = "row";
			console.log("flex-direction: row");
		}
		else if(currentElement.contains('flex-direction:row')) {
			currentElement.replace('flex-direction:row', 'flex-direction:row-reverse');
			document.getElementById(targettedElement).style.flexDirection = "row-reverse";
			console.log("flex-direction: row-reverse");
		}
		else if(currentElement.contains('flex-direction:row-reverse')) {
			currentElement.replace('flex-direction:row-reverse', 'flex-direction:column');
			document.getElementById(targettedElement).style.flexDirection = "column";
			console.log("flex-direction: column");
		}
		else if(currentElement.contains('flex-direction:column')) {
			currentElement.replace('flex-direction:column', 'flex-direction:column-reverse');
			document.getElementById(targettedElement).style.flexDirection = "column-reverse";
			console.log("flex-direction: column-reverse");
		}
		else {
			console.log("error in flexDirection");
		}
	});
}

function flexWrapController(){
	$('#flexWrap').on('click', function(e){
		e.preventDefault();
		if(currentElement.contains('flex-wrap:wrap-reverse')) {
			currentElement.replace('flex-wrap:wrap-reverse', 'flex-wrap:nowrap');
			document.getElementById(targettedElement).style.flexWrap = "nowrap";
			console.log("flex-wrap: nowrap");
		}
		else if(currentElement.contains('flex-wrap:nowrap')) {
			currentElement.replace('flex-wrap:nowrap', 'flex-wrap:wrap');
			document.getElementById(targettedElement).style.flexWrap = "wrap";
			console.log("flex-wrap: wrap");
		}
		else if(currentElement.contains('flex-wrap:wrap')) {
			currentElement.replace('flex-wrap:wrap', 'flex-wrap:wrap-reverse');
			document.getElementById(targettedElement).style.flexWrap = "wrap-reverse";
			console.log("flex-wrap: wrap-reverse");
		}
		else {
			console.log("error in flexWrap");
		}
	});
}

function justifyContentController(){
	$('#justifyContent').on('click', function(e){
		e.preventDefault();
		if(currentElement.contains('justify-content:space-evenly')) {
			currentElement.replace('justify-content:space-evenly', 'justify-content:flex-start');
			document.getElementById(targettedElement).style.justifyContent = "flex-start";
			console.log("justify-content: flex-start");
		}
		else if(currentElement.contains('justify-content:flex-start')) {
			currentElement.replace('justify-content:flex-start', 'justify-content:flex-end');
			document.getElementById(targettedElement).style.justifyContent = "flex-end";
			console.log("justify-content: flex-end");
		}
		else if(currentElement.contains('justify-content:flex-end')) {
			currentElement.replace('justify-content:flex-end', 'justify-content:center');
			document.getElementById(targettedElement).style.justifyContent = "center";
			console.log("justify-content: center");
		}
		else if(currentElement.contains('justify-content:center')) {
			currentElement.replace('justify-content:center', 'justify-content:space-between');
			document.getElementById(targettedElement).style.justifyContent = "space-between";
			console.log("justify-content: space-between");
    }
    else if(currentElement.contains('justify-content:space-between')) {
			currentElement.replace('justify-content:space-between', 'justify-content:space-around');
			document.getElementById(targettedElement).style.justifyContent = "space-around";
			console.log("justify-content: space-around");
    }
    else if(currentElement.contains('justify-content:space-around')) {
			currentElement.replace('justify-content:space-around', 'justify-content:space-evenly');
			document.getElementById(targettedElement).style.justifyContent = "space-evenly";
			console.log("justify-content: space-evenly");
		}
		else {
			console.log("error in justifyContent");
		}
	});
}

function alignItemsController(){
	$('#alignItems').on('click', function(e){
		e.preventDefault();
		if(currentElement.contains('align-items:flex-end')) {
			currentElement.replace('align-items:flex-end', 'align-items:stretch');
			document.getElementById(targettedElement).style.alignItems = "stretch";
			console.log("align-items: stretch");
		}
		else if(currentElement.contains('align-items:stretch')) {
			currentElement.replace('align-items:stretch', 'align-items:center');
			document.getElementById(targettedElement).style.alignItems = "center";
			console.log("align-items: center");
		}
		else if(currentElement.contains('align-items:center')) {
			currentElement.replace('align-items:center', 'align-items:baseline');
			document.getElementById(targettedElement).style.alignItems = "baseline";
			console.log("align-items: baseline");
		}
    else if(currentElement.contains('align-items:baseline')) {
			currentElement.replace('align-items:baseline', 'align-items:flex-start');		
			document.getElementById(targettedElement).style.alignItems = "flex-start";
			console.log("align-items: flex-start");
    }
    else if(currentElement.contains('align-items:flex-start')) {
			currentElement.replace('align-items:flex-start', 'align-items:flex-end');
			document.getElementById(targettedElement).style.alignItems = "flex-end";
			console.log("align-items: flex-end");
		}
		else {
			console.log("error in alignItems");
		}
	});
}

function alignContentController(){
	$('#alignContent').on('click', function(e){
		e.preventDefault();
		if(currentElement.contains('align-content:space-around')) {
			currentElement.replace('align-content:space-around', 'align-content:stretch');
			document.getElementById(targettedElement).style.alignContent = "stretch";
			console.log("align-content: stretch");
		}
		else if(currentElement.contains('align-content:stretch')) {
			currentElement.replace('align-content:stretch', 'align-content:flex-start');
			currentElement.replace('aContent6', 'align-content:flex-start');
			document.getElementById(targettedElement).style.alignContent = "flex-start";
			console.log("align-content: flex-start");
		}
		else if(currentElement.contains('align-content:flex-start')) {
			currentElement.replace('align-content:flex-start', 'align-content:flex-end');
			document.getElementById(targettedElement).style.alignContent = "flex-end";
			console.log("align-content: flex-end");
		}
		else if(currentElement.contains('align-content:flex-end')) {
			currentElement.replace('align-content:flex-end', 'align-content:center');		
			document.getElementById(targettedElement).style.alignContent = "center";
			console.log("align-content: center");
		}
		else if(currentElement.contains('align-content:center')) {
			currentElement.replace('align-content:center', 'align-content:space-between');
			document.getElementById(targettedElement).style.alignContent = "space-between";
			console.log("align-content: space-between");
    }
    else if(currentElement.contains('align-content:space-between')) {
			currentElement.replace('align-content:space-between', 'align-content:space-around');
			document.getElementById(targettedElement).style.alignContent = "space-around";
			console.log("align-content: space-around");
		}
		else {
			console.log("error in alignContent");
		}
	});
}

function alignSelfController(){
	$('#alignSelf').on('click', function(e){
		e.preventDefault();
		if(currentElement.contains('align-self:stretch')) {
			currentElement.replace('align-self:stretch', 'align-self:auto');
			document.getElementById(targettedElement).style.alignSelf = "auto";
			console.log("align-self: auto");
		}
		else if(currentElement.contains('align-self:auto')) {
			currentElement.replace('align-self:auto', 'align-self:flex-start');
			document.getElementById(targettedElement).style.alignSelf = "flex-start";
			console.log("align-self: flex-start");
		}
		else if(currentElement.contains('align-self:flex-start')) {
			currentElement.replace('align-self:flex-start', 'align-self:flex-end');
			document.getElementById(targettedElement).style.alignSelf = "flex-end";
			console.log("align-self: flex-end");
		}
		else if(currentElement.contains('align-self:flex-end')) {
			currentElement.replace('align-self:flex-end', 'align-self:center');
			document.getElementById(targettedElement).style.alignSelf = "center";
			console.log("align-self: center");
		}
		else if(currentElement.contains('align-self:center')) {
			currentElement.replace('align-self:center', 'align-self:baseline');
			document.getElementById(targettedElement).style.alignSelf = "baseline";
			console.log("align-self: baseline");
    }
    else if(currentElement.contains('align-self:baseline')) {
			currentElement.replace('align-self:baseline', 'align-self:stretch');
			document.getElementById(targettedElement).style.alignSelf = "stretch";
			console.log("align-self: stretch");
		}
		else {
			console.log("error in alignSelf");
		}
	});
}

function orderController(){
	$('#order').on('click', function(e){
		e.preventDefault();
		if(currentElement.contains('order:-2')) {
			currentElement.replace('order:-2', 'order:0');
			document.getElementById(targettedElement).style.order = "0";
			console.log("flex-order: 0");
		}
		else if(currentElement.contains('order:0')) {
			currentElement.replace('order:0', 'order:1');
			document.getElementById(targettedElement).style.order = "1";
			console.log("flex-order: 1");
		}
		else if(currentElement.contains('order:1')) {
			currentElement.replace('order:1', 'order:2');
			document.getElementById(targettedElement).style.order = "2";
			console.log("flex-order: 2");
		}
		else if(currentElement.contains('order:2')) {
			currentElement.replace('order:2', 'order:-1');
			document.getElementById(targettedElement).style.order = "-1";
			console.log("flex-order: -1");
		}
		else if(currentElement.contains('order:-1')) {
			currentElement.replace('order:-1', 'order:-2');
			document.getElementById(targettedElement).style.order = "-2";
			console.log("flex-order: -2");
		}
		else {
			console.log("error in order");
		}
	});
}

function flexGrowController(){
	$('#flexGrow').on('click', function(e){
		e.preventDefault();
		if(currentElement.contains('flex-grow:4')) {
			currentElement.replace('flex-grow:4', 'flex-grow:0');
			document.getElementById(targettedElement).style.flexGrow = "0";
			console.log("flex-grow: 0");
		}
		else if(currentElement.contains('flex-grow:0')) {
			currentElement.replace('flex-grow:0', 'flex-grow:1');
			document.getElementById(targettedElement).style.flexGrow = "1";
			console.log("flex-grow: 1");
		}
		else if(currentElement.contains('flex-grow:1')) {
			currentElement.replace('flex-grow:1', 'flex-grow:2');
			document.getElementById(targettedElement).style.flexGrow = "2";
			console.log("flex-grow: 2");
		}
		else if(currentElement.contains('flex-grow:2')) {
			currentElement.replace('flex-grow:2', 'flex-grow:3');
			document.getElementById(targettedElement).style.flexGrow = "3";
			console.log("flex-grow: 3");
		}
		else if(currentElement.contains('flex-grow:3')) {
			currentElement.replace('flex-grow:3', 'flex-grow:4');
			document.getElementById(targettedElement).style.flexGrow = "4";
			console.log("flex-grow: 4");
    }		else {
			console.log("error in flexGrow");
		}
	});
}

function flexShrinkController(){
	$('#flexShrink').on('click', function(e){
		e.preventDefault();
		if(currentElement.contains('flex-shrink:5')) {
			currentElement.replace('flex-shrink:5', 'flex-shrink:1');
			document.getElementById(targettedElement).style.flexShrink = "1";
			console.log("flex-shrink: 1");
		}
		else if(currentElement.contains('flex-shrink:1')) {
			currentElement.replace('flex-shrink:1', 'flex-shrink2');
			document.getElementById(targettedElement).style.flexShrink = "2";
			console.log("flex-shrink: 2");
		}
		else if(currentElement.contains('flex-shrink2')) {
			currentElement.replace('flex-shrink2', 'flex-shrink:3');
			document.getElementById(targettedElement).style.flexShrink = "3";
			console.log("flex-shrink: 3");
		}
		else if(currentElement.contains('flex-shrink:3')) {
			currentElement.replace('flex-shrink:3', 'flex-shrink:4');
			document.getElementById(targettedElement).style.flexShrink = "4";
			console.log("flex-shrink: 4");
		}
		else if(currentElement.contains('flex-shrink:4')) {
			currentElement.replace('flex-shrink:4', 'flex-shrink:5');
			document.getElementById(targettedElement).style.flexShrink = "5";
			console.log("flex-shrink: 5");
		}
		else {
			console.log("error in flexShrink");
		}
	});
}

function flexBasisController(){
	$('#flexBasis').on('click', function(e){
		e.preventDefault();
		if(currentElement.contains('flex-basis:4')) {
			currentElement.replace('flex-basis:4', 'flex-basis:auto');
			document.getElementById(targettedElement).style.flexBasis = "auto";
			console.log("flex-basis: auto");
		}
		else if(currentElement.contains('flex-basis:auto')) {
			currentElement.replace('flex-basis:auto', 'flex-basis:1');
			document.getElementById(targettedElement).style.flexBasis = "1";
			console.log("flex-basis: 1");
		}
		else if(currentElement.contains('flex-basis:1')) {
			currentElement.replace('flex-basis:1', 'flex-basis:2');
			document.getElementById(targettedElement).style.flexBasis = "2";
			console.log("flex-basis: 2");
		}
		else if(currentElement.contains('flex-basis:2')) {
			currentElement.replace('flex-basis:2', 'flex-basis:3');
			document.getElementById(targettedElement).style.flexBasis = "3";
			console.log("flex-basis: 3");
		}
		else if(currentElement.contains('flex-basis:3')) {
			currentElement.replace('flex-basis:3', 'flex-basis:4');
			document.getElementById(targettedElement).style.flexBasis = "4";
			console.log("flex-basis: 4");
		}
		else {
			console.log("error in flexBasis");
		}
	});
}

watchAddElement();
elementSelector();
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
	elementValueUpdater();
});

//have default values highlighted green?
//have listener for if button text changes, button flashes red?
//for the testing section, replace background image with test template and then record proper config values as the correct answer
//hint button to hightlight correct answer buttons
//replace method on buttons 
//allow user to upload images for background to match???