document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem('userdetails') !== null) {
        var userDetails = JSON.parse(localStorage.getItem('userdetails'));

        document.getElementById("getFirstName").value = userDetails.firstName;
        document.getElementById("getLastName").value = userDetails.lastName;
        document.getElementById("getAddress1").value = userDetails.address1;
        document.getElementById("getAddress2").value = userDetails.address2;
        document.getElementById("getAddress3").value = userDetails.address3;
    }
});

var checkout = document.getElementById('buy-now');

checkout.addEventListener("click", () => {
    event.preventDefault();
    var cardnumber=document.getElementById('cardNumber').value;
    var cardcvv=document.getElementById('cardCvv').value;

    if (cardnumber=="1234 5678 9102 3456" && cardcvv=="123") {
        var element = document.getElementById("payment-failure");
        element.classList.add("d-none");
        var element = document.getElementById("payment-success");
        element.classList.remove("d-none");
        var total=0;
        localStorage.setItem('checkout',total); 
    } else {
        var element = document.getElementById("payment-success");
        element.classList.add("d-none");
        var element = document.getElementById("payment-failure");
        element.classList.remove("d-none");
   
    }
    return false;  

    
    
});


