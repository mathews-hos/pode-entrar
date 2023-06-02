function theme() {
    let bori = document.body 
    let tema = bori.getAttribute('data-bs-theme')
    if (tema =='dark') {
        bori.setAttribute('data-bs-theme', 'light')
    } else {
        bori.setAttribute('data-bs-theme', 'dark')
    }
}