document.addEventListener('click', event => {
    let target = event.target;
    console.log(event);
    let tab = target.getAttribute('data-tab');
    if (target.localName == 'button' && tab !== '') {
        let activeContent = document.querySelector('.active.tab-' + tab);
        if (activeContent) activeContent.classList.remove('active');

        let tabs = target.closest('.tabs');
        let activeTab = tabs.querySelector('.item-tab.active');
        if (activeTab) activeTab.classList.remove('active');

        let content = document.getElementById(target.getAttribute('data-target'));
        if (content) {
            content.classList.add('active');
            target.classList.add('active');
        }
    }
})