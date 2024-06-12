const campos = document.querySelectorAll('.campo')

const enviar = document.getElementById('btn-enviar')

const mensagemObrigatorio = document.querySelectorAll('.campo-obrigatorio')



enviar.addEventListener('click', function () {
    campos.forEach(function (campo) {
        campo.classList.remove('preenchido');
        campo.value === "" ? campo.classList.add('vazio') : campo.classList.add('preenchido');
        let campoObrigatorio = campo.nextElementSibling;
        campo.value === "" ? campoObrigatorio.classList.remove('esconder-campo') : campoObrigatorio.classList.add('esconder-campo');

    })
})


