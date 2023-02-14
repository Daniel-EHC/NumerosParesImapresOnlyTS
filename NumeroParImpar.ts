/*
Calcular si un numero es par o impar por Daniel Hernandez

Input- Numero
Output- Saber si es par o impar

1. Se da un Numero
2. Se calcula si el residuo de ese numero es 0
    2.1 Si el residuo es 0 el numero es par
    2.2 Si el residuo no es 0 el numero es impar
3. Se muestra el resultado

*/

function calculaNumero(numero:number) {
    let tipo: string;
    if (numero % 2 == 0){
        tipo = 'par';
    }
    else {
        tipo = 'impar';
    }

    console.log ( 'El ' + numero + ' es ' + tipo );
}

calculaNumero(12);

