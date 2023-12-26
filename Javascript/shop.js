var productCards = document.querySelectorAll(".product-card");

    productCards.forEach(function (card) {
        
        var image = card.querySelector("img");
        var originalSrc = image.src;
        var newSrc = originalSrc.replace("Front", "Back");

        card.addEventListener("mouseover", function () {
            image.src = newSrc;
        });

        card.addEventListener("mouseout", function () {
            image.src = originalSrc;
        });
    });

var addtocart = document.querySelectorAll('.addtocart');

addtocart.forEach(function (button) {
    button.addEventListener('click', addToCart);
});

function addToCart() {
    var total=localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout',total);
    document.querySelector('#checkout').innerHTML=total;
};