var readline = require('readline-sync');

    var n = parseFloat(readline.question("valor casos teste N:"));

    for (i = 0; i < n; i++) {        
        somaImpar = 0;
        var x = parseFloat(readline.question("valor inteiro X:"));
        var y = parseFloat(readline.question("valor inteiro Y:"));
        if (x > y) {
            x += y;
            y = x - y;
            x -= y;
        }
        for (a = x + 1; a < y ;a++) {
            if (a % 2 == 1) somaImpar += a;
        }
        console.log(somaImpar);
    }
