
var arr = [];
var summMassive = [];


for ( var a = 1; a < 1000; ++a ) {
    for ( var b = a; b < 1000; ++b ) {
        for ( var c = b; c < 1000; c++ ) {
            if (Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2) && a + b + c == 1000) {
                arr.push(a);
                arr.push(b);
                arr.push(c); 
            }     
        }
    }
}

alert (arr.join("+") + " = " + "1000");
