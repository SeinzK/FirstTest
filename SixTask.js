var maxNumber = prompt ("Введите значение для сравнения: ", "")

var summA = 0;
for ( var i = 0; i <= maxNumber; i++) {
    summA += i;
    var mathPowA = Math.pow (summA, 2); 
}

var summB = 0; 
for ( var i = 0; i <= maxNumber; i++) {
    var mathPowB = Math.pow(i, 2);
    summB += mathPowB; 
}  
var endResult = (mathPowA - summB); 

alert ( endResult );