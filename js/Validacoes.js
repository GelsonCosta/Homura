function validateLoginForm() {
    var username = document.getElementById("usernameLogin").value;
    var password = document.getElementById("passwordLogin").value;

    if (username.trim() === "" || password.trim() === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, preencha todos os campos!',
        });
        return false; 
    }

    location.reload(); // Por enquanto, por ser estático não implementei Ajax
}

function validateSignupForm() {
    var username = document.getElementById("usernameSignup").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("passwordSignup").value;
    var termsCheckbox = document.getElementById("termos");

    // Expressão regular para verificar o formato do email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, preencha todos os campos!',
        });
        return false; 
    }

    if (!emailRegex.test(email)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, insira um endereço de e-mail válido!',
        });
        return false;
    }

    if (!termsCheckbox.checked) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, aceite os termos de serviço!',
        });
        return false;
    }

    location.reload(); // Por enquanto, por ser estático não implementei Ajax
}
