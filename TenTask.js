var userNumber = prompt ("Введите значение: ", ""); 
var arr = []; 

for ( var i = 2; i < userNumber; i++ ) {
    arr[i] = true; 
}

p = 2; 
do {
    
    for ( i = 2 * p; i < userNumber; i += p) {
        arr[i] = false;
    }
    
    for ( i = p + 1; i < userNumber; i++) {
        if (arr[i]) break;
    }
    
    p = i;
    
} while ( p * p < userNumber );  

var sum = 0; 
for ( i = 0; i < arr.length; i++) {
    if ( arr[i] == true)
        sum += i;
}
alert (sum); 