document.addEventListener('DOMContentLoaded', function() {
    // Abrir modal de criar tarefa
    document.getElementById('criar-tarefa-btn').addEventListener('click', function() {
        document.getElementById('modalCriarTarefa').style.display = 'block';
    });

    // Abrir modal de assumir tarefa
    document.querySelectorAll('.em-processo-btn').forEach(function(button) {
        button.addEventListener('click', function() {
            const tarefaId = button.getAttribute('data-id');
            const formEmProcesso = document.getElementById('formEmProcesso');
            formEmProcesso.action = `/em_processo/${tarefaId}`;
            document.getElementById('modalEmProcesso').style.display = 'block';
        });
    });

    // Fechar modais
    document.querySelectorAll('.close').forEach(function(closeBtn) {
        closeBtn.addEventListener('click', function() {
            closeBtn.closest('.modal').style.display = 'none';
        });
    });

    // Fechar modal se clicar fora do conteúdo
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    };
});
