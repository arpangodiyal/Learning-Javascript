var Person = function(name, birthYear, profession){
	this.name = name;
	this.birthYear = birthYear;
	this.profession = profession;
}

Person.prototype.calculateAge = function() {
	console.log(2018 - this.birthYear);
};

var john = new Person('John', 1990, 'Teacher');
var mary = new Person('Mary', 1985, 'Designer');

john.calculateAge();
mary.calculateAge();