window.fadeOutAndShowMainContent = function () {
    let elemento = document.getElementById('centralizarSplash');

    let tempoFadeOut = 2000;

    setTimeout(function () {
        elemento.style.opacity = '0';

        setTimeout(function () {
            let conteudoPrincipal = document.getElementById('conteudoPrincipal');
            conteudoPrincipal.style.display = 'flex';
            
            setTimeout(function () {
                conteudoPrincipal.style.opacity = '1';
            }, 100);
        }, tempoFadeOut);
    });
};

window.checkingForms = function () {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let notRobot = document.getElementById("notRobot").checked;

    if (email.trim() === "" || senha.trim() === "" || !notRobot) {
        alert("Por favor, preencha todos os campos.");
    }
    else {
        window.location.href = '/pages/index.html'
    }
}
