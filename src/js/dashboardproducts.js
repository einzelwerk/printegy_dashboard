// slideToggle
let toggleElems = document.querySelectorAll('.toggle__elem');
if (toggleElems.length) {
    toggleElems.forEach(function(elem) {
        let btn = elem.querySelector('.toggle__elem__btn');
        let content = elem.querySelector('.toggle__elem__content');
        if (!btn) return;

        btn.addEventListener('click', () => {
            if (content.classList.contains('toggle__elem--active')) {
                content.classList.remove('toggle__elem--active');
                content.style.maxHeight = 0;
            } else {
                content.classList.add('toggle__elem--active');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });

        if (btn.classList.contains('toggle__arrow')) {
            let arrow = btn.querySelector('.icon');
            btn.addEventListener('click', () => {
                if (arrow.classList.contains('active')) {
                    arrow.classList.remove('active');
                } else {
                    arrow.classList.add('active');
                }
            });
        };
    });
}

// Payments
let payments = document.querySelectorAll('input[name="payment"]');
if (payments.length) {
    payments.forEach(elem => {
        elem.addEventListener('change', event => {
            let activePayment = document.querySelector('input[name="payment"]:checked');
            document.querySelectorAll('.payment-content').forEach(p => {
                p.classList.add('d-none');
            });
            let content = document.getElementById('payment-' + activePayment.value);
            if (content) content.classList.remove('d-none');
        })
    })
}

// addressblock
let togglerSenderAddress;
let addressblock = document.getElementById('toggler-sender-address');
if (addressblock) {
    togglerSenderAddress = addressblock.checked;
    let form = document.getElementById('form-sender-address');
    addressblock.addEventListener('change', event => {
        if (event.target.checked) {
            form.classList.add('hidden');
        } else {
            form.classList.remove('hidden');
        }
        togglerSenderAddress = event.target.checked;
    });
}

let billing_form = document.getElementById('billing_form');
let sender_form = document.getElementById('sender_form');
if (billing_form && sender_form) {
    billing_form.addEventListener('change', event => {
        if (togglerSenderAddress) {
            let target = event.target;
            sender_form.querySelector('input[name="'+target.name+'"]').value = target.value;
        }
    });
}

let checkAddress = document.querySelector('#form_sample_address .toggler[name="address"]');
let deliveryForm = document.getElementById('delivery_form');
if (checkAddress && deliveryForm) {
    checkAddress.addEventListener('change', event => {

        deliveryForm.style.display = (event.target.checked ? 'none' : 'block');

        if (event.target.checked) {
            event.target.parentElement.classList.remove('font-regular');
        } else {
            event.target.parentElement.classList.add('font-regular');
        }

        if (!event.target.checked) {
            deliveryForm.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        }
    });
}

let formSampleAddress = document.getElementById('form_sample_address');
if (formSampleAddress) {
    formSampleAddress.addEventListener('change', () => {
        // console.log('changeFormSampleAddress');
        let form = document.getElementById('billing_form');
        if (!checkAddress.checked) {
            form = document.getElementById('form_sample_address');
        }
        var check = true;
        let fields = form.querySelectorAll('input[required]');
        fields.forEach((field, index) => {
            if (field.value == '') {
                check = false;
            }
        });

        let submit = formSampleAddress.querySelector('button[type="submit"]');
        if (check) {
            submit.removeAttribute('disabled');
        } else {
            submit.setAttribute('disabled', true);
        }
    });
}

// Checkbox color
const colorsParent = document.querySelector('.image-options__settingitems.colors');
if (colorsParent) {
    const colors = colorsParent.querySelectorAll('.value');
    colorsParent.addEventListener('click', event => {
        if ([...event.target.classList].includes('color')) {
            colors.forEach(item => item.classList.remove('active'));
            event.target.closest('.value').classList.add('active');
        }
    })
}

// Menu
const elSwiper = document.querySelector('.tabs.swiper');
if (elSwiper) {
    let activeIndex = 0;
    let slides = elSwiper.querySelectorAll('.swiper-slide');
    slides.forEach((slide,index) => {
        if ([...slide.classList].includes('active')) {
            console.log(index);
            activeIndex = index;
        }
    });
    const slider = new Swiper(elSwiper, {
        slidesPerView: 'auto',
        spaceBetween: 25,
        on: {
            init: function (swiper) {
                swiper.slideTo(activeIndex,0);
            },
        },
    });
}

