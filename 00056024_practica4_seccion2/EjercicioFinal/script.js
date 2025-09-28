document.addEventListener('DOMContentLoaded', () => {
    const selectorDia = document.getElementById('selectorDias');
    const botonAceptar = document.getElementById('aceptarBtn');
    const recordatorio = document.getElementById('mensaje');

    const listaActividades = {
        "Lunes":"Atender un cliente especifico.",
        "Martes":"Visitar una agencia fuera de la ciudad.",
        "Miercoles":"Llevar a mi hija al ballet (balé).",
        "Jueves":"Priorizar entregas de desarrollo.",
        "Viernes":"Atender problemas de manera remota.",
        "Sabado":"Hacer lo que mi esposa quiera.",
        "Domingo":"No tengo actividades para este día."
    };

    function crearRecordatorio(dia, actividad){
        return dia + ". " + actividad;
    }

    const diaSeleccionado = selectorDia.value;  
    const actividadSeleccionada = listaActividades[diaSeleccionado];

    botonAceptar.addEventListener('click', () => {
        const diaSeleccionado = selectorDia.value;
        const actividadSeleccionada = listaActividades[diaSeleccionado];
        
        if (diaSeleccionado) {
            recordatorio.innerHTML = crearRecordatorio(diaSeleccionado, actividadSeleccionada);
        } else {
            recordatorio.innerHTML = 'Por favor, selecciona un día de la semana.';
        }
    });
});