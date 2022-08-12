!(function () {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        let fields = form.querySelectorAll('[required]');
        let validation = new JustValidate(form, {
            errorFieldCssClass: 'is-invalid',
            errorLabelStyle: {
                color: '#ed0a34',
            },
        });
        fields.forEach(field => {
            switch (field.type) {
                case 'email':
                    validation.addField(`#${field.id}`, [{
                        rule: 'required',
                        errorMessage: 'Field is required',
                    }, {
                        rule: 'email',
                        errorMessage: 'Email is invalid!',
                    }]);
                    break;
                case 'file':
                    validation.addField(`#${field.id}`,[{
                        rule: 'minFilesCount',
                        value: 1,
                        errorMessage: 'Field is required',
                    }]);
                    break;
                default:
                    validation.addField(`#${field.id}`,[{
                        rule: 'required',
                        errorMessage: 'Field is required',
                    }]);
            }

            if (field.id == 'confirm-password') {
                validation.addField(`#${field.id}`,[{
                    rule: 'required',
                    errorMessage: 'Field is required',
                },{
                    validator: (value, fields) => {
                        if (fields['#password'] && fields['#password'].elem) {
                            const repeatPasswordValue = fields['#password'].elem.value;
                            return value === repeatPasswordValue;
                        }

                        return true;
                    },
                    errorMessage: 'Passwords should be the same',
                }]);
            }
        });

        validation.onSuccess((event) => {
            console.log('Validation passes and form submitted', event);
        });
    });

    // valid fields
    document.addEventListener('keyup', event => {
        if ([...event.target.classList].includes('main-form__input')) {
            if (event.target.value) {
                event.target.classList.add('is-valid');
            } else {
                event.target.classList.add('is-invalid');
            }
        }
    })
})();

!(function () {

    // datepicker
    document.querySelectorAll('.datepicker').forEach(picker => {
        datepicker(picker, {
            formatter: (input, date, instance) => {
                let [month, day] = [date.getMonth(), date.getDate()];
                if (month < 10) month = `0${month}`;
                if (day < 10) day = `0${day}`;
                input.value = `${date.getFullYear()}-${month}-${day}`;
            },
        })
    })

    // price radio
    const customPrice = document.getElementById('custom-price');
    if (customPrice) {
        document.addEventListener('change', event => {
            if (event.target.type == 'radio' && event.target.name == 'price') {
                if (event.target.value == 0) {
                    customPrice.style.display = 'inline-block';
                } else {
                    customPrice.style.display = 'none';
                    customPrice.querySelector('input').value = '';
                }
                changeAmount(event.target);
            }

            if (event.target.name == 'custom-price') {
                changeAmount(event.target);
            }
        });
    }

    function changeAmount(target) {
        const proccent = 1.5;
        const amountPayPal = document.getElementById('amount');
        if (!amountPayPal) return;
        amountPayPal.innerText = target.value - (target.value * proccent / 100);
    }


    // Onboarding slider

    const dots = document.getElementsByClassName('js-check-slide');
    const dotsArr = [].slice.call(dots);
    const slides = document.getElementsByClassName('js-main-slide');
    const pics = document.getElementsByClassName('js-main-pic');

    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', (el) => {
            const checkedSlide = dots[i].getAttribute('data-check-slide');

            for (let i = 0; i < dots.length; i++) {
                dots[i].classList.remove('main-slider__dots-item--active');
            }

            for (let i = 0; i < slides.length; i++) {
                pics[i].classList.remove('main__preview-pic--visible');
                pics[i].classList.add('main__preview-pic--hidden');
                slides[i].classList.remove('main-slider__item--visible');
                slides[i].classList.add('main-slider__item--hidden');
            }

            const checkedDot = dotsArr.find(
                (dot) =>
                dot.getAttribute('data-check-slide') === checkedSlide &&
                dot.classList.contains('main-slider__dots-item')
            );

            checkedDot.classList.add('main-slider__dots-item--active');

            const slideToShow = document.querySelector(`[data-slide="${checkedSlide}"]`);
            const picToShow = document.querySelector(`[data-pic="${checkedSlide}"]`);

            slideToShow.classList.remove('main-slider__item--hidden');
            picToShow.classList.remove('main__preview-pic--hidden');

            setTimeout(() => {
                slideToShow.classList.add('main-slider__item--visible');
                picToShow.classList.add('main__preview-pic--visible');
            }, 100);
        });
    }

    // Dropzone

    const inputEl = document.getElementById('inputFile');
    if (inputEl) {
        const dropzone = document.getElementById('dz');
        const inputFileName = document.getElementById('inputFileName');
        const buttonFileRemove = document.getElementById('buttonFileRemove');
        const inputFile = document.getElementById('inputFile');

        inputEl.addEventListener('change', handleFiles, false);
        if (buttonFileRemove) {
            buttonFileRemove.addEventListener('click', () => {
                dropzone.classList.remove('dz--filled');
                inputFile.value = '';
            }, false);
        }

        function handleFiles() {
            const fileList = this.files;

            if (fileList.length) {
                dropzone.classList.add('dz--filled');
                inputPreview.src = URL.createObjectURL(fileList[0]);
                inputFileName.innerHTML = fileList[0].name;
            } else {
                // dropzone.classList.remove('dz--filled');
            }
        }
    }

    // fields counter
    const fields_counter = document.querySelectorAll('.fields-counter');
    fields_counter.forEach(field => {
        field.addEventListener('keyup', event => {

            let counter = document.getElementById(field.dataset.counter);
            if (counter) {
                counter.innerHTML = `${field.value.length}/${field.getAttribute("maxlength")}`;
            }
        });
    });
    // const textareaEl = document.getElementById('short_message');
    // if (textareaEl) {
    //     const counterEl = document.getElementById('short_message_counter');
    //     console.log(textareaEl);
    //
    //     textareaEl.addEventListener('keyup', (e) => {
    //         counterEl.innerHTML = `${textareaEl.value.length}/${textareaEl.getAttribute("maxlength")}`;
    //     });
    // }

    // profile dropdown
    function Dropdown(element, toggleSelector=".dr__el-btn", menuSelector=".dr__el-block", menuItemSelector=".dropdown-item"){
        this.element = element
        this.toggler = element.querySelector(toggleSelector)
        this.menu = element.querySelector(menuSelector)

        this.toggleHandler =  (event) => this.toggle(event)
        this.toggler.addEventListener('click', this.toggleHandler)
    }
    Dropdown.prototype.toggle = function(event){
        const isexpanded = this.menu.dataset.expanded == 'true'
        if(isexpanded){

            this.element.classList.remove('active')
            this.menu.classList.remove('show')
            document.removeEventListener('click', this.toggleHandler)

        } else {

            this.element.classList.add('active')
            this.menu.classList.add('show')
            setTimeout(() => document.addEventListener('click', this.toggleHandler), 10)
        }
        this.menu.dataset.expanded = '' + (!isexpanded)
    }
    document.querySelectorAll('.dr__el').forEach(element => {
        new Dropdown(element)
    })

})();


