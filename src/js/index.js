const campos = document.querySelectorAll('.campo')

const enviar = document.getElementById('btn-enviar')

const mensagemObrigatorio = document.querySelectorAll('.campo-obrigatorio')



function validarCampos() {
    campos.forEach(function (campo) {
        campo.classList.remove('preenchido');
        campo.value === "" ? campo.classList.add('vazio') : campo.classList.add('preenchido');
        let campoObrigatorio = campo.nextElementSibling;
        campo.value === "" ? campoObrigatorio.classList.remove('esconder-campo') : campoObrigatorio.classList.add('esconder-campo');
    });
}

enviar.addEventListener('click', validarCampos);


document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        validarCampos();
    }
});