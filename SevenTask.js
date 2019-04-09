var a = 110000;
var mainMassive = [1,];

nextPrime:
  for (var i = 2; i <= a; i++) {

    for (var j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    mainMassive.push(i);
  }

alert (mainMassive[10001]);