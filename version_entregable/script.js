console.log("Empezamos");  // Mensaje de inicio en la consola

function menuCalculadora() {
    let continuar = true;  // Variable que controla el bucle del menú

    while (continuar) {
        // Solicita al usuario la operación deseada a través de un cuadro de diálogo
        let operacion = prompt("Seleccione una operación:\n'sum' para suma\n'rest' para resta\n'mul' para multiplicación\n'div' para división\n'sqrt' para raíz cuadrada\n'historial' para ver el historial\n'salir' para salir");

        if (operacion === 'salir') {  // Si elige salir, termina el bucle
            continuar = false;
            alert("Gracias por usar la calculadora.");
            console.log("Gracias por usar la calculadora.");
        } else if (operacion === 'historial') {  // Si elige ver el historial, lo muestra
            mostrarHistorial(historial); 
        } else if (['sum', 'rest', 'mul', 'div', 'sqrt'].includes(operacion)) {  // Si la operación es válida
            // Solicita los números para la operación (sólo uno si es raíz cuadrada)
            let num1 = parseFloat(prompt("Ingrese el primer número:"));
            let num2 = (operacion !== 'sqrt') ? parseFloat(prompt("Ingrese el segundo número:")) : 0;
            calculadora(operacion, num1, num2);  // Llama a la función calculadora
        } else {
            alert("Operación no válida.");  // Si la operación no es válida, muestra un mensaje
            console.log("Operación no válida.");
        }
    }
}

// Objeto que agrupa las funciones de operación matemática
const Calculadora = {
    sum: (num1, num2) => num1 + num2,
    rest: (num1, num2) => num1 - num2,
    mul: (num1, num2) => num1 * num2,
    div: (num1, num2) => {
        if (num2 === 0) {  // Verifica división por cero
            alert("No se puede dividir por 0");
            console.log("No se puede dividir por 0");
            return "Error";
        }
        return num1 / num2;
    },
    sqrt: (num1) => {
        if (num1 < 0) {  // Verifica que el número no sea negativo para la raíz cuadrada
            alert("No se puede calcular la raíz cuadrada de un número negativo");
            console.log("No se puede calcular la raíz cuadrada de un número negativo");
            return "Error";
        }
        return Math.sqrt(num1);
    }
};

// Array para almacenar el historial de operaciones
let historial = [];

// Función que almacena cada operación en el historial
function almacenar(num1, num2, operacion, resultado) {
    const operacionStr = new Map([
        ['sum', `${num1} + ${num2} = ${resultado}`],
        ['rest', `${num1} - ${num2} = ${resultado}`],
        ['mul', `${num1} * ${num2} = ${resultado}`],
        ['div', `${num1} / ${num2} = ${resultado}`],
        ['sqrt', `√${num1} = ${resultado}`]
    ]).get(operacion);  // Selecciona el formato de cadena según la operación

    historial.push(operacionStr);  // Agrega la operación al historial
    console.log(`Operación almacenada: ${operacionStr}`);
}

// Muestra el historial de operaciones almacenadas
function mostrarHistorial(historial) {
    if (historial.length === 0) {  // Si el historial está vacío, lo indica
        alert("Aún no hay ninguna operación almacenada.");
        console.log("Aún no hay ninguna operación almacenada.");
    } else {
        let hist = historial.join("\n");  // Convierte el historial en una sola cadena
        alert("Historial:\n" + hist);
        console.log("Historial:\n" + hist);
    }
}

// Valida que los números ingresados sean válidos para la operación
function validarInput(num1, num2, operacion) {
    if (isNaN(num1) && isNaN(num2)) {  // Verifica ambos valores
        alert("Ambos valores introducidos no son válidos.");
        return false;
    } else if (isNaN(num1)) {  // Verifica el primer valor
        alert("El primer valor introducido no es válido.");
        return false;
    } else if (isNaN(num2) && operacion !== 'sqrt') {  // Verifica el segundo valor si no es una raíz cuadrada
        alert("El segundo valor introducido no es válido.");
        return false;
    }
    return true;
}

// Ejecuta la operación seleccionada y guarda el resultado en el historial
function calculadora(operacion, num1, num2) {
    if (!validarInput(num1, num2, operacion)) {  // Verifica que los valores sean válidos
        return;
    } else {
        let resultado = Calculadora[operacion](num1, num2);  // Llama a la operación
        almacenar(num1, num2, operacion, resultado);  // Almacena el resultado
        alert("Resultado: " + resultado);
    }
}

// Inicia el programa llamando a la función principal del menú
menuCalculadora();
