// Añade un event listener al botón con id "start" que inicia el juego cuando se hace clic
document.getElementById("start").addEventListener("click", function() {
    // Pregunta al usuario si quiere seguir en Front-End o Back-End
    let area = prompt("¿Quieres seguir hacia el área de Front-End o seguir hacia el área de Back-End?");
    let framework;
    
    // Determina qué framework aprender en función del área seleccionada
    if (area.toLowerCase() === "front-end") {
        framework = prompt("Estás en el área de Front-End. ¿Quieres aprender React o aprender Vue?");
    } else if (area.toLowerCase() === "back-end") {
        framework = prompt("Estás en el área de Back-End. ¿Quieres aprender C# o aprender Java?");
    } else {
        // Si el área no es reconocida, muestra una alerta y finaliza el juego
        alert("Área no reconocida.");
        return;
    }

    // Pregunta si el usuario quiere especializarse o convertirse en Fullstack
    let path = prompt(`¿Quieres seguir especializándote en ${area} o desarrollarte para convertirte en Fullstack?`);
    let message = `Has elegido ${area} con ${framework}.`;

    // Crea un mensaje basado en la elección de especialización o Fullstack
    if (path.toLowerCase() === "especializarme") {
        message += `Vas a seguir especializándote en ${area}. ¡Buena elección!`;
    } else if (path.toLowerCase() === "fullstack") {
        message += "Te vas a convertir en Fullstack. ¡Gran desafío!";
    } else {
        // Si la opción no es reconocida, muestra una alerta y finaliza el juego
        alert("Opción no reconocida.");
        return;
    }

    // Muestra el mensaje creado en el elemento con id "story"
    document.getElementById("story").textContent = message;

    let moreTech;
    // Bucle para preguntar sobre otras tecnologías que el usuario quiera aprender
    do {
        // Pregunta si el usuario quiere seguir agregando tecnologías
        moreTech = prompt("¿Hay alguna otra tecnología que te gustaría aprender? (Escribe 'ok' para continuar o cualquier otra tecla para salir)");
        if (moreTech.toLowerCase() === "ok") {
            // Si el usuario quiere agregar más tecnologías, pregunta cuál
            let tech = prompt("¿Qué tecnología te gustaría aprender?");
            // Muestra un mensaje sobre la tecnología elegida
            alert(`Interesante elección: ${tech}. ¡Te deseo mucho éxito aprendiendo ${tech}!`);
        }
    } while (moreTech.toLowerCase() === "ok"); // Repite el bucle mientras el usuario responda "ok"

    // Muestra un mensaje final agradeciendo al usuario por jugar
    alert("¡Gracias por jugar!");
});