function calcularPromedio() {
    var numeros = document.getElementById('numeros').value.split(',').map(Number);
    
    var suma = numeros.reduce(function(a, b) {
        return a + b;
    }, 0);
    
    var promedio = suma / numeros.length;
    
    document.getElementById('promedioResultado').innerHTML = 'El promedio es: ' + promedio.toFixed(2);
}

function realizarOperacionesBasicas() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    var suma = num1 + num2;
    var resta = num1 - num2;
    var multiplicacion = num1 * num2;
    var division = num1 / num2;

    var resultado = 'Suma: ' + suma + '<br>' +
                    'Resta: ' + resta + '<br>' +
                    'Multiplicación: ' + multiplicacion + '<br>' +
                    'División: ' + division.toFixed(2);

    document.getElementById('operacionesBasicasResultado').innerHTML = resultado;
}

function calcularDescuento() {
    var precioOriginal = parseFloat(document.getElementById('precio').value);
    var descuentoPorcentaje = parseFloat(document.getElementById('descuento').value);

    var descuento = (descuentoPorcentaje / 100) * precioOriginal;
    var precioConDescuento = precioOriginal - descuento;

    document.getElementById('descuentoResultado').innerHTML = 'Precio con descuento: $' + precioConDescuento.toFixed(2)+ ' MXN';
}
