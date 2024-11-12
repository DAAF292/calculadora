# Calculadora Interactiva en JavaScript
Este proyecto implementa una calculadora interactiva en JavaScript que permite realizar operaciones matemáticas básicas, visualizar el historial de operaciones y manejar entradas no válidas. El programa se ejecuta en la consola y en ventanas emergentes, ofreciendo una experiencia interactiva al usuario.

## Características
Operaciones soportadas: Suma, resta, multiplicación, división y raíz cuadrada.
Historial de operaciones: Registra cada operación realizada con sus valores y resultados.
Validación de entradas: Verifica que los valores ingresados sean números válidos y previene errores como división por cero o raíz de números negativos.
Interfaz amigable: Muestra mensajes y resultados mediante ventanas de diálogo (prompt, alert) y la consola.
Estructura del Código
El código se divide en varias funciones y estructuras para mantener la lógica organizada:

- Función principal (menuCalculadora): Muestra un menú de opciones y permite al usuario elegir la operación que desea realizar o visualizar el historial.

- Objeto Calculadora: Agrupa las operaciones matemáticas como métodos. Cada método recibe los números y devuelve el resultado, manejando casos especiales como división por cero y raíz de números negativos.

- Array historial: Almacena un registro de cada operación realizada en forma de texto.

- Funciones auxiliares:

  - almacenar(num1, num2, operacion, resultado): Guarda el resultado de cada operación en el historial.
  - mostrarHistorial(historial): Muestra el historial completo en una ventana de diálogo.
  - validarInput(num1, num2, operacion): Verifica que los valores ingresados sean válidos para la operación seleccionada.
  - calculadora(operacion, num1, num2): Llama a la operación correspondiente y almacena el resultado en el historial.
    
## Cómo Usar
Inicia el programa ejecutando el archivo en un entorno que soporte JavaScript en el navegador o usando Node.js.

Selecciona una operación:

Al ejecutarse, el programa solicitará una operación mediante un cuadro de diálogo (prompt).
Las opciones disponibles son:
  - 'sum' - Suma
  - 'rest' - Resta
  - 'mul' - Multiplicación
  - 'div' - División
  - 'sqrt' - Raíz cuadrada
  - 'historial' - Ver el historial de operaciones
  - 'salir' - Salir del programa

Ingresa los números solicitados:
  - El programa pedirá uno o dos números, según la operación seleccionada.
  - Si la entrada no es válida, se mostrará un mensaje de error y se solicitará una entrada nuevamente.
    
Ver el historial:
  - Selecciona la opción 'historial' en el menú para ver todas las operaciones realizadas en la sesión actual.

Salir del programa:
  - Elige la opción 'salir' para terminar el programa.
