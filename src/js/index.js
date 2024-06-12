const campos = document.querySelectorAll('.campo')

const enviar = document.getElementById('btn-enviar')

const mensagemObrigatorio = document.querySelectorAll('.campo-obrigatorio')



enviar.addEventListener('click', function () {
    campos.forEach(campo =>
        campo.value !== "" ? campo.classList.add('preenchido') : campo.classList.add('vazio')
    )
})







// campo.value !== "" ? campo.classList.add('preenchido') : campo.classList.add('vazio'),
// campo.value == "" ? campo.classList.remove('esconder-campo') : campo.classList.add('esconder-campo')