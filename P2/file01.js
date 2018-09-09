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

	var data = {

		totals : {inc : 0, exp : 0},
		allItems : {inc : [], exp : []}

	};

	return {
		addItem : function(type, des, value){

			var len;
			if(data.allItems[type].length > 0){
				len = data.allItems[type].length - 1;
				id = data.allItems[type][len] + 1;
			}
			else{
				id = 0;
			}

			if(type == 'inc'){
				var newItem;
				newItem = new Income(id, des, value);
			} 

			else{
				var newItem = new Expense(id, des, value);
			}
			data.allItems[type].push(newItem);
			return newItem;
		}
	};

})();






var UIcontroller = (function(){

	var DOMstrings = {
		add__type : '.add__type',
		add__description : '.add__description',
		add__value : '.add__value',
		add__btn : '.add__btn',
		incomeContainer : '.income__list',
		expenseContainer : '.expenses__list'
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
		},

		addItemList : function(obj, type){

			var html, element;
			var description = obj.description;
			var ID = obj.id;
			var value = obj.value;

			if(type == 'inc'){
				element = DOMstrings.incomeContainer;

				html = '<div class="item clearfix" id="income-%id%"><div class="item__description">' +
			description + '</div><div class="right clearfix"><div class="item__value">+' + 
			'%value%</div><div class="item__delete"><button class="item__delete--btn">' +
			'<i class="ion-ios-close-outline"></i></button></div></div></div>';
			}

			else if(type == 'exp'){
				element = DOMstrings.expenseContainer;

				html = '<div class="item clearfix" id="expense-%id%">'+
                            '<div class="item__description">'+description+'</div>'+
                            '<div class="right clearfix">'+
                                '<div class="item__value">%value%</div>'+
                                '<div class="item__percentage">21%</div>'+
                                '<div class="item__delete">'+
                                    '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>'+
                                '</div>'+
                            '</div>'+
                        '</div>';
			}

			console.log(obj.description);
			console.log(obj.id);
			console.log(obj.value);

			newHTML = html.replace('%id%', obj.id);
			//newHTML = html.replace('%description%', obj.description);
			newHTML = html.replace('%value%', obj.value);

			document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);
		}

		
	};
})();





var Controller = (function(budgetCtrl, UIctrl){

	var startEventListener = function(){
		DOMstrings = UIctrl.getDOMstrings();

		document.querySelector(DOMstrings.add__btn).addEventListener('click',function(){
			var obj = UIctrl.getInput();
			newItem = budgetCtrl.addItem(obj.addType, obj.description, obj.value);
			UIctrl.addItemList(newItem, obj.addType);
		});

		document.addEventListener('keypress', function(event){

			if(event.keyCode == 13){

				var obj = UIctrl.getInput();
				newItem = budgetCtrl.addItem(obj.addType, obj.description, obj.value);
				UIctrl.addItemList(newItem, obj.addType);
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
