/**
 * Función que se ejecuta al hacer clic en el botón del formulario
 */
function resolverProblema() {
    // 1. ENTRADA DE DATOS: Capturar el año actual y la edad desde los inputs
    let anioActual = parseInt(document.getElementById('valAnio').value);
    let edad = parseInt(document.getElementById('valEdad').value);
    let contenedorResultado = document.getElementById('resultado');

    // Validar que los datos ingresados sean correctos
// Validar que los datos ingresados sean correctos
     if (isNaN(anioActual) || isNaN(edad) || edad < 0) {
    contenedorResultado.innerHTML = "Por favor, ingrese valores numéricos válidos.";
    return;
    }

    // 2. PROCESO / ALGORITMO: Calcular el año de nacimiento
    let anioNacimiento = anioActual - edad;

    // 3. SALIDA DE DATOS: Construir el mensaje con los resultados
    let mensaje = "<strong>Resultado del Capítulo IX:</strong><br>";
    mensaje += "• <strong>Año Actual:</strong> " + anioActual + "<br>";
    mensaje += "• <strong>Edad Ingresada:</strong> " + edad + " años<br>";
    mensaje += "• <strong>Año de Nacimiento Calculado:</strong> " + anioNacimiento;

    // Imprimir el mensaje final en el contenedor HTML
    contenedorResultado.innerHTML = mensaje;
}