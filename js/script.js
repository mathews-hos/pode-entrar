function alternate() {
    let abeia = document.querySelector('body')
    if (abeia.dataset.bsTheme === 'dark') {
        abeia.setAttribute('data-bs-theme', 'light')
    } else {
        abeia.setAttribute('data-bs-theme', 'dark')
    }

}