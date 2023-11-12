function calcular() {
    const potenciaTransmissaoMW = parseFloat(document.getElementById('transmissionPower').value);
    const ganhoAntena = parseFloat(document.getElementById('antennaGain').value);
    const perdasCabo = parseFloat(document.getElementById('cableLoss').value);

    const potenciaTransmissaoDBm = 10 * Math.log10(potenciaTransmissaoMW);

    const eirp = potenciaTransmissaoDBm + ganhoAntena - perdasCabo;

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `EIRP (dBm): ${eirp.toFixed(2)} dBm`;
}
