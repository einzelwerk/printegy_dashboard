window.onload = () => {

    setTimeout(() => {
        let loader = document.getElementById('loader');
        if (loader) loader.removeAttribute('id');
        let pls = document.querySelectorAll('.ph-item');

        if (pls.length) {
            pls.forEach(item => {
                item.remove();
            });
        }

        let blocks = document.querySelectorAll('.item__block,.item__block-popup,.item__design-popup,.thumb__elem');
        if (blocks.length) {
            blocks.forEach(block => {
                block.style.display = '';
            });
        }
    }, 3000)
}