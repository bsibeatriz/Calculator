function calcular() {
    const distTransmissorObstaculo = parseFloat(document.getElementById('distanceTransmitterObstacle').value);
    const distReceptorObstaculo = parseFloat(document.getElementById('distanceReceiverObstacle').value);
    const distancia = parseFloat(document.getElementById('distance').value);
    const frequencia = parseFloat(document.getElementById('frequency').value);

    const raioFresnel = 550 * Math.sqrt((distTransmissorObstaculo * distReceptorObstaculo) / (distancia * frequencia));

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `Raio da Zona de Fresnel (m): ${raioFresnel.toFixed(2)} m`;
}
