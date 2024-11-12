function calculadora(operacion) {
    // Se obtienen los valores numéricos de los campos de entrada del documento (num1 y num2)
    const num1 = parseFloat(document.getElementById('num1').value); // Convierte el valor del primer input a número
    const num2 = parseFloat(document.getElementById('num2').value); // Convierte el valor del segundo input a número
    
    // Se valida que los números sean válidos antes de proceder
    if (!validarInput(num1, num2)) {
        return; // Si no son válidos, se detiene la ejecución de la función
    } else {
        let resultado = 0; // Inicializamos la variable resultado

        resultado = operaciones(num1, num2, operacion); // Calcula el resultado basado en la operación seleccionada

        // Se almacena la operación y el resultado en el historial
        almacenar(num1, num2, operacion, resultado);
        
        // Se muestra el resultado en el elemento HTML con el id 'resultado'
        document.getElementById('resultado').innerText = resultado; // Actualiza el texto del resultado
    }
}

// Arreglo para almacenar el historial de operaciones
let historial = []; // Inicializa un array vacío para el historial

function almacenar(num1, num2, operacion, resultado) {
    // Según el tipo de operación, se almacena la operación en el historial en el formato adecuado
    switch(operacion) {
        case 'sum':
            historial.push(`${num1}+${num2}=${resultado}`); // Almacena la operación de suma
            break;
        case 'rest':
            historial.push(`${num1}-${num2}=${resultado}`); // Almacena la operación de resta
            break;
        case 'mul':
            historial.push(`${num1}*${num2}=${resultado}`); // Almacena la operación de multiplicación
            break;
        case 'div':
            historial.push(`${num1}/${num2}=${resultado}`); // Almacena la operación de división
            break;
        case 'sqrt':
            historial.push(`${num1}√=${resultado}`); // Almacena la operación de raíz cuadrada
            break;
    }
}

function mostrarHistorial(historial) {
    // Si no hay operaciones en el historial, muestra una alerta
    if (historial.length === 0) {
        alert("Aún no hay ninguna operación almacenada."); // Informa al usuario que el historial está vacío
    } else {
        // Si hay operaciones, se concatenan todas en una cadena y se muestran en una alerta y en la consola
        let hist = historial.join(" | "); // Une el historial en una sola cadena con separadores
        alert(hist); // Muestra el historial en una alerta
        console.log(hist); // También imprime el historial en la consola
    }
}

function borrarHistorial(historial) {
    // Borra todas las operaciones almacenadas en el historial
    historial.length = 0; // Establece la longitud del array a 0 para vaciarlo
}

function validarInput(num1, num2) {
    // Validaciones para comprobar que los inputs sean números válidos
    if (isNaN(num1) && isNaN(num2)) {
        alert("Los valores introducidos no son válidos, inténtalo de nuevo."); // Alerta si ambos no son válidos
        return false; // Devuelve false si ambos son inválidos
    } else if (isNaN(num1)) {
        alert("El primer valor introducido no es válido, inténtalo de nuevo."); // Alerta si el primer número no es válido
        return false; // Devuelve false si solo el primero es inválido
    } else if (isNaN(num2)) {
        alert("El segundo valor introducido no es válido, inténtalo de nuevo."); // Alerta si el segundo número no es válido
        return false; // Devuelve false si solo el segundo es inválido
    }
    return true; // Devuelve true si ambos son válidos
}

function operaciones(num1, num2, tipo) {
    // Función que llama a la función correspondiente según el tipo de operación
    switch (tipo) {
        case 'sum':
            return suma(num1, num2); // Llama a la función suma
        case 'rest':
            return resta(num1, num2); // Llama a la función resta
        case 'mul':
            return multiplicacion(num1, num2); // Llama a la función multiplicación
        case 'div':
            return division(num1, num2); // Llama a la función división
        case 'sqrt':
            return raizCuadrada(num1); // Llama a la función raíz cuadrada
        default:
            alert("Operación no válida."); // Maneja operaciones no válidas
            return null; // Retorna null si la operación no es válida
    }
}

// Funciones que realizan las operaciones matemáticas
function suma(num1, num2) {
    return num1 + num2; // Retorna la suma de num1 y num2
}

function resta(num1, num2) {
    return num1 - num2; // Retorna la resta de num1 y num2
}

function division(num1, num2) {
    // Comprobar si el segundo número es 0 para evitar divisiones por cero
    if (num2 === 0) {
        alert("No se puede dividir por 0"); // Alerta si el divisor es 0
        return "Error"; // Retorna "Error" para indicar una división inválida
    }
    return num1 / num2; // Retorna el resultado de la división
}

function multiplicacion(num1, num2) {
    return num1 * num2; // Retorna el producto de num1 y num2
}

function raizCuadrada(num1) {
    // Validar que el número no sea negativo para calcular la raíz cuadrada
    if (num1 < 0) {
        alert("No se puede calcular la raíz cuadrada de un número negativo"); // Alerta si el número es negativo
        return "Error"; // Retorna "Error" para indicar una operación inválida
    }
    return Math.sqrt(num1); // Retorna la raíz cuadrada de num1
}
