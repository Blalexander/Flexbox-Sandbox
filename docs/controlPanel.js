function elementResizer(){
	$('#heightPlus').on('click', function(e){
		e.preventDefault();
		// let heightArray = ["20%", "40%", "60%", "80%"];
		if(currentElement.contains('height:20%')) {
			currentElement.replace('height:20%', 'height:40%');
			document.getElementById(targettedElement).style.height = "40%";
      console.log(targettedElement, "height: 40%");
      // document.getElementById('heightPlus').style.backgroundColor = "white";      
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
      // document.getElementById('heightPlus').style.backgroundColor = "lightgreen";      
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
      // document.getElementById('heightPlus').style.backgroundColor = "white";            
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
      // document.getElementById('widthPlus').style.backgroundColor = "lightgreen";            
		}	
		else {
			console.log("error in widthPlus");
		}
	});
}

let itt = 0;

function flexDirectionController(){
	$('#flexDirection').on('click', function(e){
		e.preventDefault();
		if(currentElement.contains('flex-direction:column-reverse')) {
			currentElement.replace('flex-direction:column-reverse', 'flex-direction:row');
			document.getElementById(targettedElement).style.flexDirection = "row";
			console.log("flex-direction: row");
      // document.getElementById('flexDirection').style.backgroundColor = "lightgreen";            			        
		}
		else if(currentElement.contains('flex-direction:row')) {
			currentElement.replace('flex-direction:row', 'flex-direction:row-reverse');
			document.getElementById(targettedElement).style.flexDirection = "row-reverse";
			console.log("flex-direction: row-reverse");
      // document.getElementById('flexDirection').style.backgroundColor = "white";            

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
      // document.getElementById('flexWrap').style.backgroundColor = "lightgreen";       			
		}
		else if(currentElement.contains('flex-wrap:nowrap')) {
			currentElement.replace('flex-wrap:nowrap', 'flex-wrap:wrap');
			document.getElementById(targettedElement).style.flexWrap = "wrap";
			console.log("flex-wrap: wrap");
      // document.getElementById('flexWrap').style.backgroundColor = "white";            			    
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
      // document.getElementById('justifyContent').style.backgroundColor = "lightgreen";            			         
		}
		else if(currentElement.contains('justify-content:flex-start')) {
			currentElement.replace('justify-content:flex-start', 'justify-content:flex-end');
			document.getElementById(targettedElement).style.justifyContent = "flex-end";
			console.log("justify-content: flex-end");
      // document.getElementById('justifyContent').style.backgroundColor = "white";            
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
      // document.getElementById('alignItems').style.backgroundColor = "lightgreen";            			
		}
		else if(currentElement.contains('align-items:stretch')) {
			currentElement.replace('align-items:stretch', 'align-items:center');
			document.getElementById(targettedElement).style.alignItems = "center";
			console.log("align-items: center");          
      // document.getElementById('alignItems').style.backgroundColor = "white";            
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
      // document.getElementById('alignContent').style.backgroundColor = "lightgreen";            			       
		}
		else if(currentElement.contains('align-content:stretch')) {
			currentElement.replace('align-content:stretch', 'align-content:flex-start');
			currentElement.replace('aContent6', 'align-content:flex-start');
			document.getElementById(targettedElement).style.alignContent = "flex-start";
			console.log("align-content: flex-start");
      // document.getElementById('alignContent').style.backgroundColor = "white";            
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
      // document.getElementById('alignSelf').style.backgroundColor = "lightgreen";            			        
		}
		else if(currentElement.contains('align-self:auto')) {
			currentElement.replace('align-self:auto', 'align-self:flex-start');
			document.getElementById(targettedElement).style.alignSelf = "flex-start";
			console.log("align-self: flex-start");
      // document.getElementById('alignSelf').style.backgroundColor = "white";            
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
      // document.getElementById('order').style.backgroundColor = "lightgreen";            			     
		}
		else if(currentElement.contains('order:0')) {
			currentElement.replace('order:0', 'order:1');
			document.getElementById(targettedElement).style.order = "1";
			console.log("flex-order: 1");
      // document.getElementById('order').style.backgroundColor = "white";            
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
      // document.getElementById('flexGrow').style.backgroundColor = "lightgreen";            			        
		}
		else if(currentElement.contains('flex-grow:0')) {
			currentElement.replace('flex-grow:0', 'flex-grow:1');
			document.getElementById(targettedElement).style.flexGrow = "1";
			console.log("flex-grow: 1");
      // document.getElementById('flexGrow').style.backgroundColor = "white";            
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
    }		
    else {
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
      // document.getElementById('flexShrink').style.backgroundColor = "lightGreen";                  			        
		}
		else if(currentElement.contains('flex-shrink:1')) {
			currentElement.replace('flex-shrink:1', 'flex-shrink2');
			document.getElementById(targettedElement).style.flexShrink = "2";
			console.log("flex-shrink: 2");
      // document.getElementById('flexShrink').style.backgroundColor = "white";            
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
      // document.getElementById('flexBasis').style.backgroundColor = "lightgreen";                        			                
		}
		else if(currentElement.contains('flex-basis:auto')) {
			currentElement.replace('flex-basis:auto', 'flex-basis:1');
			document.getElementById(targettedElement).style.flexBasis = "1";
			console.log("flex-basis: 1");
      // document.getElementById('flexBasis').style.backgroundColor = "white";                  
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