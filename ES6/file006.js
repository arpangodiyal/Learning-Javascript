class Person{
	constructor(name, yearOfBirth){
		this.name = name;
		this.yearOfBirth = yearOfBirth;
	}

	calcAge(){
		let now = new Date().getFullYear();
		return now - this.yearOfBirth;
	}
}

class Athelete extends Person{
	constructor(name, yearOfBirth, olympicGames, medals){
		super(name, yearOfBirth);
		this.olympicGames = olympicGames;
		this.medals = medals;
	}

	wonMedal(){
		this.medals++;
		console.log(this.medals);
	}
}

let john = new Athelete('John', 1990, 3 ,3);
john.wonMedal();
console.log(john.calcAge());