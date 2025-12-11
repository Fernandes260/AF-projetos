function validarFormulario() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const confirmar = document.getElementById("confirmar").value;

    // Verificação de senha forte
    const temMaiuscula = /[A-Z]/.test(senha);
    const temNumero = /[0-9]/.test(senha);

    if (!temMaiuscula || !temNumero) {
        alert("A senha deve conter pelo menos 1 letra maiúscula e 1 número.");
        return false;
    }

    // Confirmar senha
    if (senha !== confirmar) {
        alert("As senhas não são iguais.");
        return false;
    }

    // Sucesso!
    alert("Cadastro realizado com sucesso!");
    return true;
}
