function calcular() {
    const potenciaMw = parseFloat(document.getElementById('power').value);

    const potenciaDbm = 10 * Math.log10(potenciaMw);

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `Potência (dBm): ${potenciaDbm.toFixed(2)} dBm`;
}
