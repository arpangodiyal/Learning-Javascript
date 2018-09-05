/*function retirement(retirementAge){

	s = " Years left until retirement";

	return function(birthYear){
		var age = 2018 - birthYear;
		console.log(retirementAge - age + s);
	}
}

var fun = retirement(65);
fun(1990);*/

function interview(name){
	return function(job){
		if(job == 'teacher'){
			console.log(name + " What do you teach ?");
		}

		else if(job == 'designer'){
			console.log(name + " Can you explain UX design ? ");
		}

		else{
			console.log(name + " What you can do ?");
		}
	}
}

interview('John')('teacher');
interview('Jane')('designer');
