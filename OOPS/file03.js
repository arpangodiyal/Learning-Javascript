var year = [1990, 2005, 1985, 1975, 1998];

function calc(arr, fun){

	result = [];

	for(var i = 0; i < arr.length; i++){
		result.push(fun(year[i]));
	}

	return result;
}

function calcAge(birthYear){
	return 2018 - birthYear;
}

function isElegible(birthYear){
	return 2018 - birthYear >= 18;
}

var ages = calc(year, calcAge);
console.log(ages);

var canVote = calc(year, isElegible);
console.log(canVote);