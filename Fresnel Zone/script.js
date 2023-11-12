function calcular() {
    const distTransmissorObstaculo = parseFloat(document.getElementById('distanceTransmitterObstacle').value);
    const distReceptorObstaculo = parseFloat(document.getElementById('distanceReceiverObstacle').value);
    const distancia = parseFloat(document.getElementById('distance').value);
    const alturaAntenas = parseFloat(document.getElementById('antennaHeight').value);
    const frequencia = parseFloat(document.getElementById('frequency').value);

    const raioFresnel = 72.6 * Math.sqrt((distTransmissorObstaculo * distReceptorObstaculo) / (distancia * frequencia));

    
    if (frequencia < 3000) {
        const raioFresnel60 = 0.6 * raioFresnel;
        resultadoElement.textContent = `Raio da Zona de Fresnel (m): ${raioFresnel60.toFixed(2)} m (60% do raio para frequências < 3 GHz)`;
    } else {
        resultadoElement.textContent = `Raio da Zona de Fresnel (m): ${raioFresnel.toFixed(2)} m`;
    }
}
