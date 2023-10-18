function calcular() {
    const distancia = parseFloat(document.getElementById('distance').value);
    const frequencia = parseFloat(document.getElementById('frequency').value);

    const fslp = 32.4 + 20 * Math.log10(distancia) + 20 * Math.log10(frequencia);

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `FSLP (dB): ${fslp.toFixed(2)} dB`;
}
