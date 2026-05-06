export function editUsername() {
    let newUsername = prompt("Digite seu nome de usuário: ");
    const usernameElement = document.getElementById("username");


    if (newUsername.trim().length <= 3 || newUsername.trim().length > 16) {
        alert("O nome de usuário deve ter entre 3 e 16 caracteres.");
        return;
    }

    usernameElement.textContent = newUsername
    localStorage.setItem("username", newUsername);
}


