function Calc(year){
	const now = new Date().getFullYear();
	let age = now-year;
	return [age, 65 - age];
}

const [age, ageUntil] = Calc(1990);
console.log(age);
console.log(ageUntil);