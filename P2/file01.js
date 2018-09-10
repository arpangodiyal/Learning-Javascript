var budgetController = (function(){

	var id = 0;
	var Income = function(id, description, value){
		this.id = id;
		this.description = description;
		this.value = value;
	};

	var Expense = function(id, description, value){
		this.id = id;
		this.description = description;
		this.value = value;
		this.percentage = -1;
	};

	Expense.prototype.calcPercentage = function(totalInc){
		if(totalInc > 0){
			this.percentage = Math.round((this.value/totalInc)*100);
		}
		else{
			this.percentage = -1;
		}
	};

	Expense.prototype.returnPercentage = function(){
		return this.percentage;
	};

	var data = {
		totals : {inc : 0, exp : 0},
		allItems : {inc : [], exp : []},
		budget : 0,
		percentage : 0
	};

	var CalculateTotal = function(type){
		var sum = 0;
		data.allItems[type].forEach(function(cur){
			sum += cur.value;
		});
		data.totals[type] = sum;
	}

	return {

		test : function(){
			return data;
		},

		addItem : function(type, des, value){
			if(data.allItems[type].length > 0){
				id += 1;
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
		},

		deleteItem : function(type, id){
			var ids, index;
			ids = data.allItems[type].map(function(current){
				return current.id;
			});
			index = ids.indexOf(id);

			if(index != -1){
				data.allItems[type].splice(index, 1);
			}
		},

		calculatePercentage : function(){
			data.allItems.exp.forEach(function(current){
				current.calcPercentage(data.totals.inc);
			});
		},

		getPercentage : function(){
			var percentages = data.allItems.exp.map(function(current){
				return current.returnPercentage();
			});
			return percentages;
		},

		calculateBudget : function(){
			CalculateTotal('inc');
			CalculateTotal('exp');
			data.budget = data.totals['inc'] - data.totals['exp'];
			if(data.totals.inc > 0){
				data.percentage = Math.round((data.totals['exp']/data.totals['inc'])*100);
			}
			else{
				data.percentage = -1;
			}
		},

		getBudget : function(){
			return {
				totalInc : data.totals.inc,
				totalExp : data.totals.exp,
				budget : data.budget,
				percentage : data.percentage
			};
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
		expenseContainer : '.expenses__list',
		budgetLabel : '.budget__value',
		incomeLabel : '.budget__income--value',
		expenseLabel : '.budget__expenses--value',
		percentageLabel : '.budget__expenses--percentage',
		container : '.container',
		expPercentageLabel : '.item__percentage',
		dateLabel : '.budget__title--month'
	};

	var formatNumber = function(type, num){
			var numsplit, int, dec, sign;

			num = Math.abs(num);
			num = num.toFixed(2);
			numsplit = num.split('.');
			int = numsplit[0];
			dec = numsplit[1];
			if(int.length > 3){
				int = int.substr(0, int.length-3) + ',' + int.substr(int.length-3, 3);
			}
			//type == 'inc' ? sign = '+' : sign = '-';
			return int + '.' + dec; 
		};

	return {
		getInput : function(){
			return {
				addType : document.querySelector(DOMstrings.add__type).value,
				description : document.querySelector(DOMstrings.add__description).value,
				value : parseFloat(document.querySelector(DOMstrings.add__value).value),
			};
		},

		getDOMstrings : function(){
			return DOMstrings;
		},

		addItemList : function(obj, type){

			var html, element;
			var description = obj.description;
			var ID = obj.id;
			var value = formatNumber(type, obj.value);

			if(type == 'inc'){
				element = DOMstrings.incomeContainer;

				html = '<div class="item clearfix" id="inc-'+ID+'"><div class="item__description">' +
			description + '</div><div class="right clearfix"><div class="item__value">+' + 
			'%value%</div><div class="item__delete"><button class="item__delete--btn">' +
			'<i class="ion-ios-close-outline"></i></button></div></div></div>';
			}

			else if(type == 'exp'){
				element = DOMstrings.expenseContainer;

				html = '<div class="item clearfix" id="exp-'+ID+'">'+
                            '<div class="item__description">'+description+'</div>'+
                            '<div class="right clearfix">'+
                                '<div class="item__value">-%value%</div>'+
                                '<div class="item__percentage">21%</div>'+
                                '<div class="item__delete">'+
                                    '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>'+
                                '</div>'+
                            '</div>'+
                        '</div>';
			}

			//newHTML = html.replace('%id%', obj.id);
			newHTML = html.replace('%value%', value);

			document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);
		},

		deleteItem : function(ID){
			var el = document.getElementById(ID);
			el.parentNode.removeChild(el);
		},

		clearFields : function(){
			var fields, fieldsArr;
			fields = document.querySelectorAll(DOMstrings.add__description +
					' , ' + DOMstrings.add__value);
			fieldsArr = Array.prototype.slice.call(fields);
			fieldsArr.forEach(function(current, index, array){
				current.value = "";
			});

			fieldsArr[0].focus();
		},

		displayBudget : function(obj){
			var sign;
			obj.budget >= 0 ? sign = '+' : sign  =  '-';
			document.querySelector(DOMstrings.budgetLabel).textContent = sign + ' ' + formatNumber('+', obj.budget);
			document.querySelector(DOMstrings.incomeLabel).textContent = '+ ' + formatNumber('+',obj.totalInc);
			document.querySelector(DOMstrings.expenseLabel).textContent ='- ' + formatNumber('-', obj.totalExp);
			if(obj.percentage >= 0){
				document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
			}
			else{
				document.querySelector(DOMstrings.percentageLabel).textContent = '---';
			}
		},

		displayPercentages : function(percentages){
			console.log(percentages);
			var fields = document.querySelectorAll(DOMstrings.expPercentageLabel);

			var nodeListforEach = function(fields, callback){
				for(var i = 0; i < fields.length; i++){
					callback(fields[i], i);
				}
			};

			nodeListforEach(fields, function(current, index){
				if(percentages[index] > 0){
					current.textContent = percentages[index] + '%';
				}
				else{
					current.textContent = '---';
				}
			});
		},

		displayMonth : function(){
			var now = new Date();
			var year = now.getFullYear();
			var month = now.getMonth();
			var months = ['January', 'February', 'March', 'April', 'May', 'June',
							'July', 'August', 'September', 'October', 'November',
							'December'];
			document.querySelector(DOMstrings.dateLabel).textContent =months[month] + ' ' + year;
		}
	};
})();






var Controller = (function(budgetCtrl, UIctrl){

	var startEventListener = function(){
		DOMstrings = UIctrl.getDOMstrings();

		document.querySelector(DOMstrings.add__btn).addEventListener('click',function(){
			var obj = UIctrl.getInput();
			if(obj.description != "" &&  obj.value > 0){
				newItem = budgetCtrl.addItem(obj.addType, obj.description, obj.value);
				UIctrl.addItemList(newItem, obj.addType);
				UIctrl.clearFields();
				updateBudget();
				updatePercentage();
			}
		});

		document.addEventListener('keypress', function(event){

			if(event.keyCode == 13){
				var obj = UIctrl.getInput();
				if(obj.description != "" &&  obj.value > 0){
					newItem = budgetCtrl.addItem(obj.addType, obj.description, obj.value);
					UIctrl.addItemList(newItem, obj.addType);
					UIctrl.clearFields();
					updateBudget();
					updatePercentage();
				}
			}
		});

		document.querySelector(DOMstrings.container).addEventListener('click', ctrlDeleteItem);
	};

	var updateBudget = function(){
		budgetCtrl.calculateBudget();
		var budget = budgetCtrl.getBudget();
		UIctrl.displayBudget(budget);
	};

	var updatePercentage = function(){
		budgetCtrl.calculatePercentage();
		var percentages = budgetCtrl.getPercentage();
		UIctrl.displayPercentages(percentages);
	}

	var ctrlDeleteItem = function(event){
		var itemId = event.target.parentNode.parentNode.parentNode.parentNode.id;
		if(itemId){
			var splitId = itemId.split('-');
			var type = splitId[0];
			var ID = parseInt(splitId[1]);
			budgetCtrl.deleteItem(type, ID);
			UIctrl.deleteItem(itemId);
			updateBudget();
			updatePercentage();
		}
	};

	return {
		init : function(){
			console.log('Application has started');
			UIctrl.displayBudget({
				totalInc : 0,
				totalExp : 0,
				budget : 0,		
				percentage : 0
			});
			UIctrl.displayMonth();
			startEventListener();
		}
	};

})(budgetController, UIcontroller);


Controller.init();
