const conversionRate = 7.5345;
document.addEventListener("DOMContentLoaded", () => {
    var priceElements = document.getElementsByClassName('price-item');
    for (var i = 0; i < priceElements.length; ++i) {
        var numb = priceElements[i].innerHTML.match(/\d/g);;
        if (numb != undefined) {
            numb = numb.join("");
            let hrk = numb / 100 * conversionRate;
            let formatted = (numb / 100).toFixed(2) + 'EUR / ' + hrk.toFixed(2) + 'kn'
            priceElements[i].innerHTML = formatted;
        }
    };
});
