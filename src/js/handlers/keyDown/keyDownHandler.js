export const keyDownHandler = (e) => {
    e.preventDefault()
    
    const modal = document.querySelector('.modal')

    console.log(e.path)

    if (e.code === 'Escape' && modal.style.display != 'none') {
        modal.style.display = 'none'
    }
}
