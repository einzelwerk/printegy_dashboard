let charchoiceBtns = document.querySelectorAll('.image-options__item');
if (charchoiceBtns.length > 0) {
    charchoiceBtns.forEach((item) => {
        item.addEventListener('click', () => {
            if (item.classList.contains('active')) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        })
    });
}

let tagValue = document.querySelector('.tag__value'),
    tagsDiv = document.querySelector('.settingblock__tags'),
    tagBtn = document.querySelector('.tag__add');

function addText(tagValue) {

    let tagNew = document.createElement('div');
    tagNew.className = "tag";
    tagNew.innerHTML = tagValue;
    tagNew.addEventListener('click', deleteText);
    tagsDiv.appendChild(tagNew);

}

function deleteText() {
    this.remove();
}

tagBtn.addEventListener("click", function(e) {
    if (tagValue.value !== '') {
        addText(tagValue.value);
    }
    tagValue.value = '';
});

let editBtns = document.querySelectorAll('.open-modal');
if (editBtns.length) {
    editBtns.forEach((item) => {
        item.addEventListener('click', () => {
            Modal.show(document.getElementById(item.getAttribute('data-modal')));
        })
    });
}

let Modal = {
    show: item => {
        item.querySelector('.overlay__notify').classList.add('active');
        item.querySelector('.warningmodal__wrapper').classList.add('active');
    },
    hide: item => {
        item.querySelector('.overlay__notify.active').classList.remove('active');
        item.querySelector('.warningmodal__wrapper.active').classList.remove('active');
    }
}

// close modal
let closeBtns = document.querySelectorAll('.warningmodal__wrapper__modal .crs');
if (closeBtns.length > 0) {
    closeBtns.forEach((item) => {
        item.addEventListener('click', () => {
            Modal.hide(document.getElementById(item.getAttribute('data-modal')));
        })
    });
}

let fieldName = document.getElementById('reg_form_name');
if (fieldName) {
    fieldName.addEventListener('input', event => {
        let count = event.target.value.length;
        let help = document.getElementById(event.target.getAttribute('data-help'));
        if (help) {
            help.innerText = count + '/' + event.target.getAttribute('maxlength');
        }
    })
}