import { callModal } from "./modals/callModal"
import { progressBar } from "./progressBars/progressBar"
import { tabHeaderHandler } from "./handlers/tabHeaders/tabHeaderHandler"
import { actionTimer } from "./timers/actionTimer"
import { keyDownHandler } from "./handlers/keyDown/keyDownHandler"
import { showModalByScroll } from "./modals/showModalByScroll"
import { renderMenu } from "./menu/renderMenu"
import { MENU } from "./menu/menuTypes"

document.addEventListener('DOMContentLoaded', () => {
    actionTimer('2021-10-19')

    document.addEventListener('scroll', progressBar)
    document.addEventListener('scroll', showModalByScroll)
    document.addEventListener('keydown', keyDownHandler)

    document.querySelector('.tabheader__items').addEventListener('click', tabHeaderHandler)
    document.querySelectorAll('[data-modal]').forEach(dataModal => dataModal.addEventListener('click', callModal))

    document.querySelector('#menu').innerHTML = renderMenu(MENU)
})
