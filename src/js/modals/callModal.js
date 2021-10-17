export const callModal = (e) => {
    e.preventDefault()

    const modal = document.querySelector('.modal')

    if (modal.style.display === 'none') {
        modal.style.display = ''

        modal.addEventListener('click', e => {
            e.preventDefault()

            if (e.target === modal) {
                modal.style.display = 'none'
            }
        })
    } else {
        modal.style.display = 'none'
    }
}
