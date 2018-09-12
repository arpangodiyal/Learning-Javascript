//Maps in ES6

let question = new Map();
question.set('Question', 'Name the captial of India ?');
question.set(1, 'Mumbai');
question.set(2, 'Chennai');
question.set(3, 'Delhi');
question.set(4, 'Kolkata');
question.set('correct', 3);
question.set(true, 'Correct Answer :D');
question.set(false, 'Wrong Answer');

console.log(question.get('Question'));

for([key, value] of question.entries()){
	if(typeof(key) == 'number'){
		console.log(`Option${key}. ${value}`);
	}
}

let ans = parseInt(prompt('Enter the correct answer'));

alert(question.get(question.get('correct') == ans));