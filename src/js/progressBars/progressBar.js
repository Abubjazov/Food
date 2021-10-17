import { callModal } from "../modals/callModal"

export const progressBar = () => {
    const progressBar = document.querySelector('.progressbar')

    progressBar.style.width = (document.scrollingElement.scrollTop * 100) / (document.scrollingElement.scrollHeight - document.scrollingElement.clientHeight) + '%'

    if (parseInt(progressBar.style.width) === 100) {
        setTimeout(callModal, 2000)
    }
}
