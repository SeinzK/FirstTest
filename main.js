var startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    
    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


var money, time;
expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true; 
countBtn.disabled = true;
checkSavings.disablrd = true;

startBtn.addEventListener( 'click', function() {
    expensesBtn.disabled = false;
    optionalExpensesBtn.disabled = false; 
    countBtn.disabled = false;
    checkSavings.disablrd = false;
    
    time = prompt ("Введите дату в формате YY-MM-DD: ", "");
    money = +prompt ("Ваш бюджет на месяц?", ""); 
     
    while ( isNaN(money) || money == "" || money == null ) {
        money = +prompt ("Ваш бюджет на месяц?", "");
    };
    
    appData.budget = money; 
    appData.timeData = time; 
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date (Date.parse(time)).getFullYear();
    monthValue.value = new Date (Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date (Date.parse(time)).getDate();    
});

expensesBtn.addEventListener ('click', function (){
        let sum = 0;
        for ( var i = 0; i < expensesItem.length; i++ ) {
        var a = expensesItem[i].value
            b = expensesItem[++i].value;

        if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' &&   a.length < 50) {
            appData.expenses[a] = b; 
            sum += +b;
        } 
        else {
            i = i - 1; 
        }
    }
    expensesValue.textContent = sum; 
});

optionalExpensesBtn.addEventListener ('click', function (){
   
   for ( var i = 0; i < optionalExpensesItem.length; i++ ) {
       var opt = optionalExpensesItem[i].value; 
       appData.optionalExpenses[i] = opt; 
       optionalExpensesValue.textContent += appData.optionalExpenses[i] + ', '; 
   };
});

countBtn.addEventListener ('click', function (){
    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay; 
    
        if ( appData.moneyPerDay < 100 ) {
            levelValue.textContent = "Ну ты и бомж!";
            } else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
                levelValue.textContent = "Твоего дохода хватит на еду в маке"; 
            } else if ( appData.moneyPerDay > 2000) {
                levelValue.textContent = "Ничего себе, да ты БОГАТ! Дашь свой номерок?";
            } else {
                levelValue.textContent = "Произошла досаднейшая проблема. Я не знаю как ее решить";
            }; 
    }
    else {
        alert ("Начните расчет с конопки: 'Начать расчет'");
        budgetValue.textContent = "Произошла ошибка"; 
    };
});

incomeItem.addEventListener ('input', function () {
    var item = incomeItem.value;
    appData.income = item.split(', '); 
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener ('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    };
});

sumValue.addEventListener ('input', function (){
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
    
    appData.monthIncome = sum/100/12 * percent; 
    appData.yearIncome = sum/100 * percent;
        
    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener ('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
    
    appData.monthIncome = sum/100/12 * percent; 
    appData.yearIncome = sum/100 * percent;
        
    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

var appData = { // создание обекта с даными
    budget: money, // месячный бюджет пользователя
    expenses: {},    // обязательные вытраты
    optionalExpenses: {}, // необязательные вытраты
    income: [], // дополнительный доход 
    timeData: time,
    savings: false, // заощадження
};