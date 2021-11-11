let log = console.log;

// Ejercicio 1

let str = "origin";


function cambiarVocales(string) {

    let string2;

    string2 = string.replace(/[aeiou]/g, '1');


    return string2;
}

log(cambiarVocales(str));

//Ejercicio 2

let numero = prompt('Ingrese un numero del 1 al 5');

function mostrarLista(n) {
    let i;

    if (n <= 5) {
        for (i = n; i <= 10; i++) {
            log(n);
            n++;
        }
    } else {
        n = prompt('Numero muy alto, ingrese un numero del 1 al 5');
        for (i = n; i <= 10; i++) {
            log(n);
            n++;
        }
    }

}

log(mostrarLista(numero));

// Ejercicio 3

let arr = [10, "20", 30, "40", 50];

function cambiarTipo(array) {
    let num, i;
    let len = array.length;
    for (i = 0; i < len; i++) {
        if (typeof array[i] === 'Number') {

        } else {
            array[i] = parseInt(array[i]);
        }
    }

    return array;
}

log(cambiarTipo(arr));

// Ejercicio 4

let arr2 = [2, 4, 7, 1, 2, "foo", 7, "bar", "qux", 3, "foo"];

function eliminarRepetido(array) {

    arrSet = [...new Set(array)];
    return arrSet;

}

log(eliminarRepetido(arr2));