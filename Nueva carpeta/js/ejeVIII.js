/**
 * Función que se ejecuta al hacer clic en el botón del formulario
 */
function resolverProblema() {
    // 1. ENTRADA DE DATOS (Parámetros fijos del problema del Capítulo VIII)
    let totalVasijas = 21;
    let llenas = 7;
    let semillenas = 7;
    let vacias = 7;
    let personas = 3;

    // 2. PROCESO / CÁLCULO
    let vasijasPorPersona = totalVasijas / personas; // 7 vasijas por persona
    let contenidoTotal = (llenas * 1) + (semillenas * 0.5); // 10.5 unidades de vino
    let contenidoPorPersona = contenidoTotal / personas; // 3.5 unidades por persona

    // 3. SALIDA DE DATOS: Construir el reporte con la solución clásica
    let contenedorResultado = document.getElementById('resultado');
    
    let mensaje = "<strong>Resultado del Reparto Equitativo:</strong><br>";
    mensaje += "• Cada persona debe recibir: <strong>" + vasijasPorPersona + " vasijas</strong> y <strong>" + contenidoPorPersona + " unidades de vino</strong>.<br><br>";
    
    mensaje += "<strong>Distribución exacta por individuo:</strong><br>";
    mensaje += "• <strong>Persona 1:</strong> 3 llenas, 1 semillena, 3 vacías (Total: 7 vasijas, 3.5 vino)<br>";
    mensaje += "• <strong>Persona 2:</strong> 3 llenas, 1 semillena, 3 vacías (Total: 7 vasijas, 3.5 vino)<br>";
    mensaje += "• <strong>Persona 3:</strong> 1 llena, 5 semillenas, 1 vacía (Total: 7 vasijas, 3.5 vino)";

    // Imprimir el mensaje final en el contenedor HTML
    contenedorResultado.innerHTML = mensaje;
}