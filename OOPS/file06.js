var createQuestion = function(question, choices, ans){
	this.question = question;
	this.choices = choices;
	this.ans = ans;

	this.display = function(){
		console.log(this.question);

		for(var i = 0; i < choices.length; i++){
			console.log(choices[i]);
		}
	}

	this.getAnswer = function(){
		var j = prompt("Enter the correct choice");
		if(j == ans)
			console.log('Correct Answer');
		else
			console.log('Wrong Answer');
	}
}

var ques1 = new createQuestion('What is the capital of India', 
	['Delhi', 'Chennai', 'Mumbai'], 0);

var ques2 = new createQuestion('Name of national animal of India',
	['Lion', 'Tiger', 'Elephant'],1);

var ques3 = new createQuestion('Name of national sports of India',
	['Cricket', 'Football', 'Hockey'], 2);

var questions = [ques1, ques2, ques3];


var randomQuestion = Math.floor(Math.random()*3);


questions[randomQuestion].display();
questions[randomQuestion].getAnswer();