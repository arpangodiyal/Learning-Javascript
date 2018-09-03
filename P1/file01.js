var player1CurrentScore = 0, player2CurrentScore = 0, player1 = 0, player2 = 0, 
activePlayer = 1;

//Events on rolling a dice
document.querySelector('.Button').addEventListener('click',function(){

	var dice = Math.floor(Math.random() * 6) + 1;

	var die = document.querySelector('.Dice');

	die.src = "die_face_" + dice + '.png';

	if(activePlayer == 1){
		if(dice == 1){
			activePlayer = 2;
			dice = 0;
			player1CurrentScore = 0;
		}
		player1CurrentScore += dice;
		document.querySelector('.player1CurrentScore').textContent = player1CurrentScore ;
	}

	else if(activePlayer == 2){
		if(dice == 1){
			activePlayer = 1;
			dice = 0;
			player2CurrentScore = 0;
		}
		player2CurrentScore += dice;
		document.querySelector('.player2CurrentScore').textContent = player2CurrentScore ;
	}

});

//Events on clicking the hold button
document.querySelector(".Hold").addEventListener('click', function(){

	if(activePlayer == 1){
		player1 += player1CurrentScore;
		player1CurrentScore = 0;
		activePlayer = 2;
		document.querySelector(".Player1").textContent = player1;
		document.querySelector('.player1CurrentScore').textContent = player1CurrentScore ;
	}

	else if(activePlayer == 2){
		player2 += player2CurrentScore;
		player2CurrentScore = 0;
		activePlayer = 1;
		document.querySelector(".Player2").textContent = player2;
		document.querySelector('.player2CurrentScore').textContent = player2CurrentScore ;
	}

});














