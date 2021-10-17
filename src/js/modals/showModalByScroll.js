import { callModal } from "../modals/callModal"

export const showModalByScroll = () => {
    if ((document.scrollingElement.scrollTop * 100) / (document.scrollingElement.scrollHeight - document.scrollingElement.clientHeight) === 100) {
        setTimeout(callModal, 2000)
        document.removeEventListener('scroll', showModalByScroll)
    }
}
