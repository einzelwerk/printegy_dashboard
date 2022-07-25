(() => {
    const loginForm = document.getElementById('login_form');
    const regForm = document.getElementById('reg_form');
    const resetForm = document.getElementById('reset_form');
    const newPasswordForm = document.getElementById('new_password_form');
    const brandingForm = document.getElementById('branding_form');
    const popDesignForm = document.getElementById('popdesign_form');


    if (loginForm) {
        new JustValidate(loginForm, {
                errorFieldCssClass: 'is-invalid',
                errorLabelStyle: {
                    color: '#ed0a34',
                },
            })
            .addField('#login_form_name', [{
                rule: 'required',
                errorMessage: 'Field is required',
            }, ])
            .addField('#login_form_password', [{
                rule: 'required',
                errorMessage: 'Field is required',
            }, ])
            .onSuccess((event) => {
                console.log('Validation passes and form submitted', event);
            });
    }
    if (regForm) {
        new JustValidate(regForm, {
                errorFieldCssClass: 'is-invalid',
                errorLabelStyle: {
                    color: '#ed0a34',
                },
            })
            .addField('#reg_form_email', [{
                    rule: 'required',
                    errorMessage: 'Field is required',
                },
                {
                    rule: 'email',
                    errorMessage: 'Email is invalid!',
                },
            ])
            .addField('#reg_form_name', [{
                    rule: 'required',
                    errorMessage: 'Field is required',
                },
                {
                    errorMessage: 'Not less than 6 symbols',
                    rule: 'minLength',
                    value: 6,
                },
            ])
            .addField('#reg_form_password', [{
                rule: 'required',
                errorMessage: 'Field is required',
            }, ])
            .addField('#reg_form_password_repeat', [{
                validator: (value, fields) => {
                    if (fields['#reg_form_password'] && fields['#reg_form_password'].elem) {
                        const repeatPasswordValue = fields['#reg_form_password'].elem.value;

                        return value === repeatPasswordValue;
                    }

                    return true;
                },
                errorMessage: 'Passwords should be the same',
            }, ])
            .addField('#agree_checkbox', [{
                rule: 'required',
            }, ])
            .onSuccess((event) => {
                console.log('Validation passes and form submitted', event);
            });
    }
    if (resetForm) {
        new JustValidate(resetForm, {
                errorFieldCssClass: 'is-invalid',
                errorLabelStyle: {
                    color: '#ed0a34',
                },
            })
            .addField('#reset_login', [{
                rule: 'required',
                errorMessage: 'Field is required',
            }, ])
            .onSuccess((event) => {
                console.log('Validation passes and form submitted', event);
            });
    }
    if (newPasswordForm) {
        new JustValidate(newPasswordForm, {
                errorFieldCssClass: 'is-invalid',
                errorLabelStyle: {
                    color: '#ed0a34',
                },
            })
            .addField('#new_password', [{
                rule: 'required',
                errorMessage: 'Field is required',
            }, ])
            .addField('#new_password_repeat', [{
                validator: (value, fields) => {
                    if (fields['#new_password'] && fields['#new_password'].elem) {
                        const repeatPasswordValue = fields['#new_password'].elem.value;

                        return value === repeatPasswordValue;
                    }

                    return true;
                },
                errorMessage: 'Passwords should be the same',
            }, ])
            .onSuccess((event) => {
                console.log('Validation passes and form submitted', event);
            });
    }

    if (brandingForm) {
        let validate = new JustValidate(brandingForm, {
                errorFieldCssClass: 'is-invalid',
                errorLabelStyle: {
                    color: '#ed0a34',
                },
            })

        if (document.getElementById('store_url')) {
            validate.addField('#store_url', [{
                rule: 'required',
                errorMessage: 'Field is required',
            }]);
        }

        if (document.getElementById('support_email')) {
            validate.addField('#support_email', [{
                rule: 'required',
                errorMessage: 'Field is required',
            }, {
                rule: 'email',
                errorMessage: 'Enter valid e-mail',
            }]);
        }

        validate.onSuccess((event) => {
            console.log('Validation passes and form submitted', event);
        });
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

        inputEl.addEventListener('change', handleFiles, false);

        function handleFiles() {
            const fileList = this.files;

            if (fileList.length) {
                dropzone.classList.add('dz--filled');
                inputPreview.src = URL.createObjectURL(fileList[0]);
                inputFileName.innerHTML = fileList[0].name;
            } else {
                dropzone.classList.remove('dz--filled');
            }
        }
    }

    // Textarea short message counter

    const textareaEl = document.getElementById('short_message');

    if (textareaEl) {
        const counterEl = document.getElementById('short_message_counter');

        textareaEl.addEventListener('keyup', (e) => {
            counterEl.innerHTML = `${textareaEl.value.length}/300`;
        });
    }

    // Select
    document.addEventListener('click', event => {
        let target = event.target;
        if (target.localName == 'span') {
            let parent = target.closest('.cselect__label');
            if (parent) target = parent;
        }

        if ([...target.classList].includes('cselect__label')) {
            let parent = target.closest('.cselect');
            let select = parent.querySelector('select');
            if (select) {
                select.value = target.getAttribute('data-value');
                select.dispatchEvent(new Event('change'));
                let title = parent.querySelector('.cselect__title');
                let prefix = title.getAttribute('data-prefix');
                if (prefix) {

                    title.innerHTML = `${prefix}${target.innerHTML}`;
                } else {
                    title.innerHTML = target.innerHTML;
                }

            }
        }
    });
    // TEST
    // document.querySelector('#filter-select-sort').value = 'desc';
    // document.querySelector('#filter-select-sort').dispatchEvent(new Event('change'));
    // document.getElementById('filter-select-sort').addEventListener('change', event => {
    //     console.log(event.target.value);
    // });
})();

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
        
    }else{
  
        this.element.classList.add('active')
        this.menu.classList.add('show')
        setTimeout(() => document.addEventListener('click', this.toggleHandler), 10)
    }
    this.menu.dataset.expanded = '' + (!isexpanded)
}

document.querySelectorAll('.dr__el').forEach(element => {
    new Dropdown(element)
})
