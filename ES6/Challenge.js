class Town{
	constructor(){

	}
	
	parkProperties(...parks){
		let sum = 0, park;

		parks.forEach(cur => {
			//console.log(cur);
			sum += cur.get('age');
			if(cur.get('hasThousand')){
				park = cur.get('name');
				//console.log(park);
			}
		});
		console.log(`Average age of a park is ${sum/3}`);

		parks.forEach(cur => {
			console.log(`Density of ${cur.get('name')} is ${cur.get('treeDensity')}`);
		});

		console.log(`${park} has 1000+ trees`);
	}

	streetProperties(...streets){
		var sum = 0;
		streets.forEach(cur => {
			sum += cur.get('len');
		});
		console.log(`Average length of a street is ${sum/3}`);

		streets.forEach(cur => {
			console.log(`Size of ${cur.get('name')} is ${cur.get('size')}`);
		});
	}

}

class park extends Town{
	constructor(name, treeNo, area, age){
		super();
		this.name = name;
		this.treeNo = treeNo;
		this.area = area;
		this.age = age;
	}
	show(){
		let details = new Map();
		details.set('name', this.name);
		details.set('age', this.age);
		details.set('treeDensity', this.treeNo / this.area);
		details.set('hasThousand', this.treeNo >= 1000);
		return details;
	}
}

class Street extends Town{
	constructor(name,len,size = 'normal'){
		super();
		this.size = size;
		this.len = len;
		this.name = name;
	}

	show(){
		let details = new Map();
		details.set('name', this.name);
		details.set('size', this.size);
		details.set('len', this.len);
		//console.log(details);
		return details;
	}
}

var newPark1 = new park('Park1', 100, 25, 5);
var newPark2 = new park('Park2', 1000, 200, 20);
var newPark3 = new park('Park3', 500, 100, 15);

var street1 = new Street('Street1', 50);
var street2 = new Street('Street2', 25, 'Small');
var street3 = new Street('Street3', 100, 'Large');

var town = new Town();

console.log('------Park Properties------');
town.parkProperties(newPark1.show(),newPark2.show(),newPark3.show());

console.log('------Street Properties------');
town.streetProperties(street1.show(), street2.show(), street3.show());
