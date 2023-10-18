function calcular() {
    const larguraBanda = parseFloat(document.getElementById('bandwidth').value);
    const modulacao = parseFloat(document.getElementById('modulation').value);

    const taxaNyquist = 2 * larguraBanda * modulacao;

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `Taxa de Nyquist: ${taxaNyquist.toFixed(2)} bps`;
}
