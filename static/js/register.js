document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const fullName = document.getElementById("full-name").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const repeatPassword = document.getElementById("repeat-password").value;

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username);
    const isPhone = /^\+?\d{10,15}$/.test(username); // простая проверка телефона (например, +79998887766)

    if (!isEmail && !isPhone) {
        alert("Введите корректный email или номер телефона");
        return;
    }

    if (password !== repeatPassword) {
        alert("Пароли не совпадают.");
        return;
    }

    const data = {
        fullName: fullName,
        username: username,
        password: password
    };
    console.log(data);
});