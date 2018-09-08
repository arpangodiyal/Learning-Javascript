var budgetController = (function(){

	var Income = function(id, description, value){
		this.id = id;
		this.description = description;
		this.value = value;
	}

	var Expense = function(id, description, value){
		this.id = id;
		this.description = description;
		this.value = value;
	}

	

})();






var UIcontroller = (function(){

	var DOMstrings = {
		add__type : '.add__type',
		add__description : '.add__description',
		add__value : '.add__value',
		add__btn : '.add__btn'
	};

	return {
		getInput : function(){
			return {
				addType : document.querySelector(DOMstrings.add__type).value,
				description : document.querySelector(DOMstrings.add__description).value,
				value :  document.querySelector(DOMstrings.add__value).value,
			};
		},

		getDOMstrings : function(){
			return DOMstrings;
		}
	};
})();





var Controller = (function(budgetCtrl, UIctrl){

	var startEventListener = function(){
		DOMstrings = UIctrl.getDOMstrings();

		document.querySelector(DOMstrings.add__btn).addEventListener('click', function(){
			console.log(UIctrl.getInput());
		});

		document.addEventListener('keypress', function(event){

			if(event.keyCode == 13){
				console.log(UIctrl.getInput());
			}

		});
	}

	return {
		init : function(){
			console.log('Application has started');
			startEventListener();
		}
	};

})(budgetController, UIcontroller);


Controller.init();
