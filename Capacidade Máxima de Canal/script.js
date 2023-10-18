function calcular() {
    const larguraBanda = parseFloat(document.getElementById('bandwidth').value);
    const snr = parseFloat(document.getElementById('snr').value);

    const capacidadeCanal = larguraBanda * Math.log2(1 + Math.pow(10, snr / 10));

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `Capacidade Máxima de Canal: ${capacidadeCanal.toFixed(2)} bps`;
}
