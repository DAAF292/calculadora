console.log("Empezamos");

function menuCalculadora() {
    let continuar = true;

    while (continuar) {
        // Solicita la operación al usuario
        let operacion = prompt("Seleccione una operación:\n'sum' para suma\n'rest' para resta\n'mul' para multiplicación\n'div' para división\n'sqrt' para raíz cuadrada\n'historial' para ver el historial\n'salir' para salir");

        if (operacion === 'salir') {  // Opción para salir
            continuar = false;
            alert("Gracias por usar la calculadora.");
            console.log("Gracias por usar la calculadora.");
        } else if (operacion === 'historial') {  // Muestra el historial
            mostrarHistorial(historial); 
        } else if (['sum', 'rest', 'mul', 'div', 'sqrt'].includes(operacion)) {
            // Pide números según el tipo de operación
            let num1 = parseFloat(prompt("Ingrese el primer número:"));
            let num2 = (operacion !== 'sqrt') ? parseFloat(prompt("Ingrese el segundo número:")) : 0;
            calculadora(operacion, num1, num2);
        } else {
            alert("Operación no válida.");
            console.log("Operación no válida.");
        }
    }
}

// Objeto que agrupa las funciones de operación
const Calculadora = {
    sum: (num1, num2) => num1 + num2,
    rest: (num1, num2) => num1 - num2,
    mul: (num1, num2) => num1 * num2,
    div: (num1, num2) => {
        if (num2 === 0) {
            alert("No se puede dividir por 0");
            console.log("No se puede dividir por 0");
            return "Error";
        }
        return num1 / num2;
    },
    sqrt: (num1) => {
        if (num1 < 0) {
            alert("No se puede calcular la raíz cuadrada de un número negativo");
            console.log("No se puede calcular la raíz cuadrada de un número negativo");
            return "Error";
        }
        return Math.sqrt(num1);
    }
};

// Historial como array
let historial = [];

// Almacena cada operación en el array historial
function almacenar(num1, num2, operacion, resultado) {
    const operacionStr = new Map([
        ['sum', `${num1} + ${num2} = ${resultado}`],
        ['rest', `${num1} - ${num2} = ${resultado}`],
        ['mul', `${num1} * ${num2} = ${resultado}`],
        ['div', `${num1} / ${num2} = ${resultado}`],
        ['sqrt', `√${num1} = ${resultado}`]
    ]).get(operacion);

    historial.push(operacionStr);
    console.log(`Operación almacenada: ${operacionStr}`);
}

// Muestra el historial almacenado
function mostrarHistorial(historial) {
    if (historial.length === 0) {
        alert("Aún no hay ninguna operación almacenada.");
        console.log("Aún no hay ninguna operación almacenada.");
    } else {
        let hist = historial.join("\n");
        alert("Historial:\n" + hist);
        console.log("Historial:\n" + hist);
    }
}

// Valida que los números ingresados sean válidos
function validarInput(num1, num2, operacion) {
    if (isNaN(num1) && isNaN(num2)) {
        alert("Ambos valores introducidos no son válidos.");
        return false;
    } else if (isNaN(num1)) {
        alert("El primer valor introducido no es válido.");
        return false;
    } else if (isNaN(num2) && operacion !== 'sqrt') {
        alert("El segundo valor introducido no es válido.");
        return false;
    }
    return true;
}

// Llama a la operación seleccionada y guarda el resultado
function calculadora(operacion, num1, num2) {
    if (!validarInput(num1, num2, operacion)) {
        return;
    } else {
        let resultado = Calculadora[operacion](num1, num2);
        almacenar(num1, num2, operacion, resultado);
        alert("Resultado: " + resultado);
    }
}

// Inicia el programa
menuCalculadora();
