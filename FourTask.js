var massive = [];
var a; 
for (  var i = 100; i < 1000; i++) {
    for ( var j = 100; j < i; j++ ) {
        a = String (j * i);
        if ( a == a.split("").reverse().join("")) 
            massive.push(a);
    }
}
alert (massive[massive.length - 1]);
