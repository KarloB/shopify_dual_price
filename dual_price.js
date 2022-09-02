const conversionRate = 7.5345;
document.addEventListener("DOMContentLoaded", () => {
    var priceElements = document.getElementsByClassName('price-item');
    for (var i = 0; i < priceElements.length; ++i) {
        var numb = priceElements[i].innerHTML.match(/\d/g);;
        if (numb != undefined) {
            numb = numb.join("");
            let eur = numb / 100 / conversionRate;
            let formatted = (numb / 100).toFixed(2) + 'kn / ' + eur.toFixed(2) + 'EUR'
            priceElements[i].innerHTML = formatted;
        }
    };
});
