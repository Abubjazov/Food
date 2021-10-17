export const callModal = () => {
    const modal = document.querySelector('.modal')

    if (modal.style.display == 'none') {
        modal.style.display = ''

        modal.addEventListener('click', e => {
           if (e.target === modal) {
            modal.style.display = 'none'
           }
        })
    } else {
        modal.style.display = 'none'
    }
}
