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