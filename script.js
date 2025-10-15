const DATA_INICIO = new Date('2024-07-01'); // data de início do relacionamento

function calcularDiasJuntos() {
    const hoje = new Date();
    const diferencaEmTempo = hoje.getTime() - DATA_INICIO.getTime();
    
    // 1 dia tem 1000 milissegundos * 60 segundos * 60 minutos * 24 horas
    const UM_DIA = 1000 * 60 * 60 * 24; 
    
    const dias = Math.floor(diferencaEmTempo / UM_DIA);
    
    document.getElementById('diasJuntos').textContent = `${dias} dias`;
}

// Chama a função quando a página carrega
calcularDiasJuntos();
// Opcional: Para atualizar o contador todo dia automaticamente:
// setInterval(calcularDiasJuntos, 86400000); // Atualiza a cada 24h