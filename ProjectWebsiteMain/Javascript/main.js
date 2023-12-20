if (localStorage.getItem('checkout') == null) {  
    localStorage.setItem('checkout',0);
}
var checkout=localStorage.getItem('checkout');
document.querySelector('#checkout').innerHTML=checkout;

var logout = document.getElementById('loginlogout');
logout.addEventListener("click", Logout);

function Logout() {
    var loggedin=localStorage.getItem('loggedIn'); 
    if (loggedin==1) {
        localStorage.setItem('loggedIn',0);
        window.location.href = "home.html";
    } else {
        window.location.href = "login.html";
    }
}

checkLoginStatus()

function checkLoginStatus() {
    
    var loggedin=localStorage.getItem('loggedIn');
    if (loggedin==1) {
        document.querySelector('#loginlogout').innerHTML="Logout";
    } else{
        document.querySelector('#loginlogout').innerHTML="Login"; 
        element = document.getElementById("loginlogout");
        element.setAttribute("href", "login.html");
    } 

}



