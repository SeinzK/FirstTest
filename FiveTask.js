var i = 20;
var a = 20; 

while ( i > 1 ) {
    if ( a % i == 0 ) {
        i--;
    }
    else {
        a += 20; 
        i = 20;
        
    }
}
alert (a);
