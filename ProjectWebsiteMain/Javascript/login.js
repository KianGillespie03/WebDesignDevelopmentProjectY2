
    var loginForm = document.querySelector('form');
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        if (email === "NoamhColumba@gmail.com" && password === "password123") {
            localStorage.setItem('loggedIn', 1);
            window.location.href = "shop.html";
        } else {
            localStorage.setItem('loggedIn', 0);
            var errorElement = document.getElementById("loginerror");
            errorElement.classList.remove("d-none");
        }
    });

