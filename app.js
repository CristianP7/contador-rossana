const fechaFutura = new Date("2025-04-14T00:00:00");

function calcularTiempoRestante() {
    const ahora = new Date();
    const diferencia = fechaFutura - ahora;

    // Calcular el tiempo restante en milisegundos
    const meses = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 30));
    const dias = Math.floor((diferencia % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Actualizar los valores en el HTML
    document.getElementById("month-value").textContent = meses;
    document.getElementById("day-value").textContent = dias;
    document.getElementById("hour-value").textContent = horas;
    document.getElementById("minute-value").textContent = minutos;
    document.getElementById("second-value").textContent = segundos;

    // Llamar a la función cada segundo
    setTimeout(calcularTiempoRestante, 1000);
}


calcularTiempoRestante();