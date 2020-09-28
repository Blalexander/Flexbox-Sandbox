function watchLogoutButton(){
	$('.logout-btn').on('click', function(){
		localStorage.clear();
		window.location = '/';
	});
}

function displayScores(data) {
	// if(window.location != "http://localhost:3001/sandbox.html") { //for testing purposes
	// if(window.location != "https://vast-tundra-61213.herokuapp.com/sandbox.html") { 
	if(window.location != "https://flexboxsandbox.herokuapp.com/sandbox.html") { 
		window.location.replace("/sandbox.html")
	}

	if(data != 0) {
		// console.log(data)
		highestScore = data;
	}

	if(document.getElementById('topScore')) {
		let scoreItem = document.getElementById('topScore').innerHTML = "High Score: " + data;
		return scoreItem;
	}
}


function getScores(user_id){
	fetch(`/entries/scores/${user_id}`, {
		headers: {
			"Authorization": "Bearer "+localStorage.authToken
		}
	})
	.then(res=>{
    if (res.ok) {
			// console.log(res)
      return res.json();
		}
		throw new Error(res.statusText);
	})
	.then(resJson => {
		displayScores(resJson);
	})
	.catch(err=>{
		console.error(err);
	});
}

function getUserId(user){
	fetch(`/users/id/${user.username}`)
	.then(res=>{
		if (res.ok) {
      return res.json();
    }
    throw new Error(res.statusText);
	})
	.then(user_id => {
		localStorage.user_id = user_id;
		getScores(user_id);
	})
	.catch(err=>{
		console.error(err);
	});
}

function getToken(user){
	let _user = user;
	fetch("/auth/login", {
		method: "post",
		body: JSON.stringify(user),
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then(res=> res.json())
	.then(data=>{
		localStorage.authToken = data.authToken;
		console.log(data);
		getUserId(_user); 
	})
	.catch(err=>{
		// console.error(err); //this handles incorrect logins
		document.querySelector('.error-container').style.opacity = 1;
		setTimeout(() => {
			document.querySelector('.error-container').style.opacity = 0;
		}, 10000)
	});
}

function watchLoginForm(){
	$('#login').submit(function(e){
		$('.error').remove();
		e.preventDefault();
		let username = $("#username-input").val();
		let password = $("#password-input").val();
		getToken({
			username,
			password
		});
	});
}

$(()=>{
	if(localStorage.authToken){
		getScores(localStorage.user_id);
	}else{
		$('#landing').css('display', 'flex');
		watchLoginForm();
	}
});