/*var smithFamily = ['John', 'Jane', 'Bob'];
var millerFamily = ['Mike', 'Lilly', 'Jonas'];

var bigFamily = [...smithFamily, ...millerFamily];
console.log(bigFamily);*/

// Rest Parameters
/*
function isFullAge(...years){
	years.forEach(cur => {
		console.log(2018-cur >= 18);
	});
}

isFullAge(1990, 1985 ,2012);*/

//Rest Parameters

function isFullage(limit, ...years){
	years.forEach(cur => {
		console.log(2018 - cur >= limit);
	})
}

isFullage(30, 1990, 1985, 2012);
