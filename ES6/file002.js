let years = [1975, 1990, 1998, 2005, 2012];

//ES5

var ages5 = years.map(function(cur, index){
	var curYear = new Date().getFullYear();
	return `Age of person at ${index+1} is ${curYear - cur}`;
});

//console.log(ages5);

//ES6 Arrow Functions.

let ages6 = years.map((cur, index) => {
	const now = new Date().getFullYear();
	return `Age of person at ${index + 1} is ${now-cur}`;
});

//console.log(ages6);

var john = function(name){
	this.name = name;
};

john.prototype.isFriends = function(friends) {
	
	let arr = friends.map((cur) => {
		return `${this.name} and ${cur} are friends`;
	});
	console.log(arr);
};

friends = ['Jane', 'Bob', 'Mark'];

new john('John').isFriends(friends);