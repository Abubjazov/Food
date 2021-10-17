export const keyDownHandler = (e) => {
    e.preventDefault()
    
    const modal = document.querySelector('.modal')

    if (e.code === 'Escape' && modal.style.display != 'none') {
        modal.style.display = 'none'
    }
}
