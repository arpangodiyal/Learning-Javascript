var budgetController = (function(){

	x = 25;
	function addition(){
		return x + 5;
	}

	return {
		y : addition(),
	}

})();

var UIcontroller = (function(){


})();

var Controller = (function(budgetCtrl, UIctrl){

	console.log(budgetCtrl.y);

})(budgetController, UIcontroller);