function calcular() {
    const potenciaTransmissao = parseFloat(document.getElementById('transmissionPower').value);
    const ganhoAntenaTx = parseFloat(document.getElementById('antennaTx').value);
    const perdasCaboTx = parseFloat(document.getElementById('cableLossTx').value);
    const fslp = parseFloat(document.getElementById('fslp').value);
    const ganhoAntenaRx = parseFloat(document.getElementById('antennaRx').value);
    const perdasCaboRx = parseFloat(document.getElementById('cableLossRx').value);

    const rsl = potenciaTransmissao + ganhoAntenaTx - perdasCaboTx - fslp + ganhoAntenaRx - perdasCaboRx;

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `RSL (dBm): ${rsl.toFixed(2)} dBm`;
}


