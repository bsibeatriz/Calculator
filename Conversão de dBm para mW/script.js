function calcular() {
    const potenciaDbm = parseFloat(document.getElementById('power').value);

    const potenciaMw = Math.pow(10, (potenciaDbm / 10));

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `Potência (mW): ${potenciaMw.toFixed(2)} mW`;
}
