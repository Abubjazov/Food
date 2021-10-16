import { progressBar } from "./progressBars/progressBar"
import { tabHeaderHandler } from "./tabHeaders/tabHeaderHandler"
import { actionTimer } from "./timers/actionTimer"

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('scroll', progressBar)

    document.querySelector('.tabheader__items').addEventListener('click', tabHeaderHandler)
    actionTimer('2021-10-19')
})
