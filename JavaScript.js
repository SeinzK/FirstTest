'use strict';

var money = prompt ("Ваш бюджет на месяц?", "");
var time = prompt ("Введите дату в формате YYYY-MM-DD", "");
var expensesFirst = +prompt ("Введите обязательную статью расходов в этом месяце","");
var expensesSecond = prompt ("Во сколько обойдется?", "");


var appData = {
    moneyData: money,
    timeData: time, 
    expensesFirst: expensesSecond,
    optionalExpenses: "",
    income: [], 
    savings: "false"

}

alert (appData.moneyData / 30);

