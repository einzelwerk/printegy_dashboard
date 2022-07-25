let ShippingToggleButton = document.querySelectorAll('.shipping__show');
if (ShippingToggleButton.length) {
    ShippingToggleButton.forEach(btn => {
        btn.addEventListener('click', event => {
            let target = event.target;
            let shipping = target.closest('.shippingtable__item');
            if (shipping) {
                shipping.classList.toggle('shippingtable__item-active')
            }
        })
    })
}