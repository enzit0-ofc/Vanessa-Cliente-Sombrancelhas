const form = document.querySelector('.signup-form');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const nome = data.get('nome')?.toString().trim() || 'Cliente';
    const whatsapp = data.get('whatsapp')?.toString().trim() || 'Não informado';
    const plano = data.get('plano')?.toString().trim() || 'Não informado';
    const frequencia = data.get('frequencia')?.toString().trim() || 'Não informado';
    const observacoes = data.get('observacoes')?.toString().trim() || 'Sem observações';

    const mensagem = encodeURIComponent(
      `Olá! Quero contratar um plano mensal da Vanessa Lima Studio Beauty.%0A%0A` +
        `Nome: ${nome}%0A` +
        `WhatsApp: ${whatsapp}%0A` +
        `Plano desejado: ${plano}%0A` +
        `Frequência: ${frequencia}%0A` +
        `Observações: ${observacoes}`
    );

    window.location.href = `https://wa.me/?text=${mensagem}`;
  });
}
