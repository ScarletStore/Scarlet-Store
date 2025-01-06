// Função para alternar entre modo claro e escuro
const modeToggle = document.getElementById('mode-toggle-checkbox');
const modeIcon = document.getElementById('mode-icon');

modeToggle.addEventListener('change', () => {
    document.body.classList.toggle('light-mode', modeToggle.checked);
    // Troca o emoji conforme o modo
    if (modeToggle.checked) {
        modeIcon.textContent = '🌞'; // Emoji de sol para o modo claro
    } else {
        modeIcon.textContent = '🌙'; // Emoji de lua para o modo escuro
    }
});