function calcular() {
    const potenciaTransmissao = parseFloat(document.getElementById('transmissionPower').value);
    const ganhoAntena = parseFloat(document.getElementById('antennaGain').value);
    const perdasCabo = parseFloat(document.getElementById('cableLoss').value);

    const eirp = potenciaTransmissao + ganhoAntena - perdasCabo;

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `EIRP (dBm): ${eirp.toFixed(2)} dBm`;
}
