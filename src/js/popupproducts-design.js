let itemDesign = document.querySelectorAll('.item__design-popup');
itemDesign.forEach(el => {
    el.addEventListener('click', () => {
        el.classList.toggle('active');
    });
});