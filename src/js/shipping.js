const ShippingToggleButton = document.querySelectorAll('.shipping__show');
if (ShippingToggleButton.length) {
    ShippingToggleButton.forEach(btn => {
        btn.addEventListener('click', event => {
            let target = event.target;
            let shipping = target.closest('.shippingtable__item');
            if (shipping) {
                shipping.classList.toggle('shippingtable__item-active');
            }
            checkToggleHead();
        })
    })
}

function checkToggleHead() {
    const show = document.querySelector('.shippingtable__item-active');
    let head_items = document.querySelectorAll('.shipping__toggle');
    head_items.forEach(elem => {
        if (show) {
            elem.classList.remove('hidden');
        } else {
            elem.classList.add('hidden');
        }
    })
}