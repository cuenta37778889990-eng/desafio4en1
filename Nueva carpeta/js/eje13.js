/**
 * Función principal que se ejecuta al presionar el botón "Calcular Pi"
 */
function calcularPi() {
    // 1. ENTRADA DE DATOS: Capturar el valor de 'n' ingresado en el formulario
    let n = parseInt(document.getElementById('valN').value);
    let contenedorResultado = document.getElementById('resultado');

    // Validar que el número ingresado sea válido
    if (isNaN(n) || n <= 0) {
        contenedorResultado.innerHTML = "Por favor, ingrese un número entero válido mayor a 0.";
        return;
    }

    // 2. PROCESO / ALGORITMO: Implementar el bucle para la sumatoria
    let suma = 0;

    // Ciclo 'for' para sumar 1 / i^2 desde i = 1 hasta n[span_9](start_span)[span_9](end_span)
    for (let i = 1; i <= n; i++) {
        suma += 1 / (i * i);
    }

    // Aplicar la multiplicación por 6 y extraer la raíz cuadrada según la fórmula[span_10](start_span)[span_10](end_span)
    let piEstimado = Math.sqrt(6 * suma);
    
    // Obtener el valor real de Pi proporcionado por JavaScript para comparar
    let piReal = Math.PI;
    
    // Calcular la diferencia absoluta (error de aproximación)
    let diferencia = Math.abs(piReal - piEstimado);

    // 3. SALIDA DE DATOS: Construir el mensaje con los resultados detallados
    let mensaje = "<strong>Resultados con n = " + n.toLocaleString() + ":</strong><br>";
    mensaje += "• <strong>Pi Estimado:</strong> " + piEstimado.toFixed(8) + "<br>";
    mensaje += "• <strong>Pi Real (Math.PI):</strong> " + piReal.toFixed(8) + "<br>";
    mensaje += "• <strong>Diferencia:</strong> " + diferencia.toExponential(4);

    // Imprimir el mensaje final en la interfaz web
    contenedorResultado.innerHTML = mensaje;
}