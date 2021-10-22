import { renderMenu } from "./menu/renderMenu"
import { offerSlider } from "./sliders/offerSlider"
import { actionTimer } from "./timers/actionTimer"
import { callModal } from "./modals/callModal"
import { showModalByScroll } from "./modals/showModalByScroll"
import { progressBar } from "./progressBars/progressBar"
import { tabHeaderHandler } from "./handlers/tabHeaders/tabHeaderHandler"
import { keyDownHandler } from "./handlers/keyDown/keyDownHandler"
import { postDataHandler } from "./handlers/formsHandler"
import { calculateHandler } from "./handlers/calculate/calculateHandler"
import { setCalculate } from "./handlers/calculate/setCalculate"

document.addEventListener('DOMContentLoaded', () => {
    actionTimer('2021-10-22')
    offerSlider()
    renderMenu().then(renderData => {
        document.querySelector('#menu').innerHTML = renderData
    })
    setCalculate()

    document.addEventListener('scroll', progressBar)
    document.addEventListener('scroll', showModalByScroll)
    document.addEventListener('keydown', keyDownHandler)

    document.querySelector('.tabheader__items').addEventListener('click', tabHeaderHandler)
    document.querySelectorAll('[data-modal]').forEach(dataModal => dataModal.addEventListener('click', callModal))
    document.querySelectorAll('form').forEach(form => {postDataHandler(form)})
    document.querySelectorAll('.calculating__choose_big, #gender').forEach(item => item.addEventListener('click', calculateHandler))
    document.querySelectorAll('.calculating__choose_medium > input').forEach(item => item.addEventListener('change', calculateHandler))
})

