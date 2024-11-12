console.log("Empezamos");
// Menú interactivo de la calculadora
function menuCalculadora() {
    let continuar = true;

    // Bucle para repetir hasta que el usuario decida salir
    while (continuar) {
        // Solicita al usuario seleccionar una operación
        let operacion = prompt("Seleccione una operación:\n'sum' para suma\n'rest' para resta\n'mul' para multiplicación\n'div' para división\n'sqrt' para raíz cuadrada\n'historial' para ver el historial\n'salir' para salir");

        // Maneja la opción de salida
        if (operacion === 'salir') {
            continuar = false;
            alert("Gracias por usar la calculadora.");
            console.log("Gracias por usar la calculadora.");
        } 
        // Muestra el historial de operaciones
        else if (operacion === 'historial') {
            mostrarHistorial(historial); 
        } 
        // Verifica si la operación seleccionada es válida antes de pedir los números
        else if (['sum', 'rest', 'mul', 'div', 'sqrt'].includes(operacion)) {
            // Pide el primer número y, si aplica, el segundo
            let num1 = parseFloat(prompt("Ingrese el primer número:"));
            let num2 = (operacion !== 'sqrt') ? parseFloat(prompt("Ingrese el segundo número:")) : 0;

            // Llama a la función principal para ejecutar la operación
            calculadora(operacion, num1, num2);
        } 
        // Informa al usuario si la operación seleccionada no es válida
        else {
            alert("Operación no válida. Por favor, seleccione una opción válida.");
            console.log("Operación no válida. Por favor, seleccione una opción válida.");
        }
    }
}

// Función principal de la calculadora
function calculadora(operacion, num1, num2) {
    // Valida los números ingresados
    if (!validarInput(num1, num2, operacion)) {
        return;
    } else {
        // Calcula el resultado y lo almacena en el historial
        let resultado = operaciones(num1, num2, operacion);
        almacenar(num1, num2, operacion, resultado);
        console.log("Resultado:", resultado);
        alert("Resultado: " + resultado);
    }
}

// Arreglo para almacenar el historial de operaciones
let historial = [];

// Almacena el resultado de cada operación en el historial
function almacenar(num1, num2, operacion, resultado) {
    // Añade la operación realizada al historial en el formato adecuado
    switch(operacion) {
        case 'sum':
            historial.push(`${num1} + ${num2} = ${resultado}`);
            break;
        case 'rest':
            historial.push(`${num1} - ${num2} = ${resultado}`);
            break;
        case 'mul':
            historial.push(`${num1} * ${num2} = ${resultado}`);
            break;
        case 'div':
            historial.push(`${num1} / ${num2} = ${resultado}`);
            break;
        case 'sqrt':
            historial.push(`√${num1} = ${resultado}`);
            break;
    }
    // Muestra en consola la operación recién almacenada
    console.log(`Operación almacenada: ${historial[historial.length - 1]}`);
}

// Muestra todas las operaciones almacenadas en el historial
function mostrarHistorial(historial) {
    if (historial.length === 0) {
        alert("Aún no hay ninguna operación almacenada.");
        console.log("Aún no hay ninguna operación almacenada.");
    } else {
        // Une el historial en una cadena y lo muestra en consola y alerta
        let hist = historial.join(" | ");
        alert("Historial: " + hist);
        console.log("Historial:", hist);
    }
}

// Borra todas las operaciones almacenadas en el historial, esta función está diseñada para la calculadora con interfaz, no aplica a esta versión de la aplicación
function borrarHistorial() {
    historial.length = 0;
    alert("Historial borrado.");
    console.log("Historial borrado.");
}

// Valida que los inputs sean números válidos
function validarInput(num1, num2, operacion) {
    // Verifica si ambos inputs son inválidos
    if (isNaN(num1) && isNaN(num2)) {
        alert("Ambos valores introducidos no son válidos.");
        console.log("Ambos valores introducidos no son válidos.");
        return false;
    } 
    // Verifica si el primer input es inválido
    else if (isNaN(num1)) {
        alert("El primer valor introducido no es válido.");
        console.log("El primer valor introducido no es válido.");
        return false;
    } 
    // Verifica si el segundo input es inválido (excepto para raíz cuadrada)
    else if (isNaN(num2) && operacion !== 'sqrt') {
        alert("El segundo valor introducido no es válido.");
        console.log("El segundo valor introducido no es válido.");
        return false;
    }
    return true;
}

// Selecciona la operación a realizar
function operaciones(num1, num2, tipo) {
    switch (tipo) {
        case 'sum':
            return suma(num1, num2);
        case 'rest':
            return resta(num1, num2);
        case 'mul':
            return multiplicacion(num1, num2);
        case 'div':
            return division(num1, num2);
        case 'sqrt':
            return raizCuadrada(num1);
        default:
            alert("Operación no válida.");
            console.log("Operación no válida.");
            return null;
    }
}

// Función que realiza la suma
function suma(num1, num2) {
    return num1 + num2;
}

// Función que realiza la resta
function resta(num1, num2) {
    return num1 - num2;
}

// Función que realiza la multiplicación
function multiplicacion(num1, num2) {
    return num1 * num2;
}

// Función que realiza la división y controla el caso de división por cero
function division(num1, num2) {
    if (num2 === 0) {
        alert("No se puede dividir por 0");
        console.log("No se puede dividir por 0");
        return "Error";
    }
    return num1 / num2;
}

// Función que calcula la raíz cuadrada, asegurando que el número no sea negativo
function raizCuadrada(num1) {
    if (num1 < 0) {
        alert("No se puede calcular la raíz cuadrada de un número negativo");
        console.log("No se puede calcular la raíz cuadrada de un número negativo");
        return "Error";
    }
    return Math.sqrt(num1);
}

// Llamada inicial al menú de la calculadora para iniciar el programa
menuCalculadora();
