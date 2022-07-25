let pricetableBtn = document.querySelector('.pricetablebtn'),
    pricetable = document.querySelector('.pricetable__event__table'),
    overlayTable = document.querySelector('.overlay__table');

if (pricetableBtn) {
    pricetableBtn.addEventListener('mouseover', () => {
        pricetable.classList.add('show');
        overlayTable.classList.add('active');
    });

    pricetableBtn.addEventListener('mouseout', () => {
        pricetable.classList.remove('show');
        overlayTable.classList.remove('active');
    });
}


