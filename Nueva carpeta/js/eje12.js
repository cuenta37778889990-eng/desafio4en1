
function resolverEcuacion() {
    // 1. ENTRADA DE DATOS: Capturar los valores ingresados en los inputs del formulario
    let a = parseFloat(document.getElementById('valA').value);
    let b = parseFloat(document.getElementById('valB').value);
    let c = parseFloat(document.getElementById('valC').value);
    
    // Seleccionar el contenedor donde se mostrará la salida
    let contenedorResultado = document.getElementById('resultado');

 // Validar que los campos no estén vacíos o contengan letras
     if (isNaN(a) || isNaN(b) || isNaN(c)) {
    contenedorResultado.innerHTML = "Por favor, ingrese todos los valores numéricos.";
    return;
     }

    // Validar que 'a' no sea cero (ya que no sería una ecuación cuadrática)
    if (a === 0) {
        contenedorResultado.innerHTML = "El valor de 'a' no puede ser 0 (no sería una ecuación cuadrática).";
        return;
    }

    // 2. PROCESO / ALGORITMO: Calcular el discriminante D = b^2 - 4ac
    let D = (b * b) - (4 * a * c);
    let mensaje = "<strong>Discriminante (D):</strong> " + D.toFixed(4) + "<br><br>";

    // 3. ESTRUCTURAS CONDICIONALES según el Ejercicio 12:
    if (D > 0) {
        // Si D es mayor que cero, existen dos raíces reales
        mensaje += "The equation has two roots,<br>"; //
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        mensaje += "Raíz 1: " + x1.toFixed(4) + "<br>";
        mensaje += "Raíz 2: " + x2.toFixed(4);
        
    } else if (D === 0) {
        // Si D es igual a cero, existe una sola raíz real
        mensaje += "The equation has one root,<br>"; //
        let x = -b / (2 * a);
        mensaje += "Raíz: " + x.toFixed(4);
        
    } else {
        // Si D es menor que cero, no hay raíces reales
        mensaje += "The equation has no real roots."; //
    }

    // 4. SALIDA DE DATOS: Imprimir el mensaje final estructurado en la interfaz web
    contenedorResultado.innerHTML = mensaje;
}