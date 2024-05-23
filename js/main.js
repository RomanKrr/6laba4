document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;

    // Валідація даних
    if (username === "" || password === "" || firstName === "" || lastName === "" || email === "") {
        document.getElementById("result").innerText = "Будь ласка, заповніть всі поля.";
        return;
    }
    alert(`Користувач зареєстрований!\nІм'я: ${firstName}\nПрізвище: ${lastName}\nEmail: ${email}`);

});
