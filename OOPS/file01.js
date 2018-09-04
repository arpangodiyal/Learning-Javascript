var person = function(name, birthYear, profession){
	this.name = name;
	this.birthYear = birthYear;
	this.profession = profession;
	this.calculateAge = function(){
		return 2018 - this.birthYear;
	}
}

var john = new person('John', 1990, 'Teacher');
console.log(john.name);
console.log(john.calculateAge());