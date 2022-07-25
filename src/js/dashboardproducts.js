// let selectSingle = document.querySelectorAll('.cselect');
// selectSingle.forEach(el => {
//     let selectSingle_title = el.querySelector('.cselect__title');
//     selectSingle_title.addEventListener('click', () => {
//         if ('active' === el.getAttribute('data-state')) {
//             el.setAttribute('data-state', '');
//         } else {
//             el.setAttribute('data-state', 'active');
//         }
//     });
// });


// document.addEventListener('click', (e) => {
//     let selectActive = document.querySelector('.cselect[data-state="active"]');
//     let hideSelect = e.composedPath().includes(selectActive);
//     if (!hideSelect) {
//         selectActive.setAttribute('data-state', '');
//     }
// });


// slideToggle



let toggleElems = document.querySelectorAll('.toggle__elem');

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