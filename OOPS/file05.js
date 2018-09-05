/*var john = {
	name : 'John',
	job : 'Teacher',

	presentation : function(mode){
		if(mode == 'formal'){
			console.log('Good morning, I\'m ' + this.name + ', I\'m a ' + 
				this.job);
		}
		else{
			console.log('What\'s Up, I\'m ' + this.name + ', I\'m a ' + 
				this.job);
		}
	}
};

john.presentation('formal');

var emily = {
	name : 'Emily',
	job : 'Designer'
};

john.presentation.call(emily, 'informal');

var emilyPresentation = john.presentation.bind(emily);
emilyPresentation('formal');*/

var birthYears = [1990, 1985, 2005, 1998];
var ages = [];

function arrayCalc(arr, fun){

	var result = [];
	for(var i = 0; i < arr.length; i++){
		ages.push(2018 - arr[i]);
		result.push(fun(arr[i]));
	}
	return result;
}

function fullAge(year, limit){
	var age = 2018 - year;
	if(age  >= limit)
		return true;
	else
		return false;
}

var ans = arrayCalc(birthYears, fullAge.bind(this, 20));
console.log(ages);
console.log(ans);