function registerUser() {
    const nome = document.getElementById('cadastro-nome').value;
    const email = document.getElementById('cadastro-email').value;
    const senha = document.getElementById('cadastro-senha').value;

    if (!nome || !email || !senha) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const user = { nome, email, senha: btoa(senha) };
    localStorage.setItem(email, JSON.stringify(user));
    alert("Cadastro realizado com sucesso!");
    window.location.href = "login.html";
}

function loginUser() {
    const email = document.getElementById('login-email').value;
    const senha = document.getElementById('login-password').value;

    if (!email || !senha) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const storedUser = localStorage.getItem(email);
    if (storedUser) {
        const user = JSON.parse(storedUser);
        if (btoa(senha) === user.senha) {
            alert("Login realizado com sucesso!");
            window.location.href = "escolha.html";
        } else {
            alert("Senha incorreta.");
        }
    } else {
        alert("Usuário não encontrado.");
    }
}
