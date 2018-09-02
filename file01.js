var john = {

	firstname : 'John',
	lastname : 'Smith',
	isMarried : false,
	occupation : 'Teacher',
	birthYear : 1990,
	mass : 75,
	height : 1.5,

	age : function(){
		return 2018 - this.birthYear;
	},

	bmi : function(){
		return this.mass/(this.height * this.height);
	}
};

var mike = {

	firstname : 'Mike',
	lastname : 'Adams',
	isMarried : true,
	occupation : 'Designer',
	birthYear : 1992,
	mass : 80,
	height : 1.4,

	age : function(){
		return 2018 - this.birthYear;
	},

	bmi : function(){
		return this.mass/(this.height * this.height);
	}
};

if(john.bmi() > mike.bmi())
	console.log('John has higher BMI');

else if(mike.bmi() > john.bmi())
	console.log('Mike has higher BMI');

else
	console.log('Both are having equal BMI');