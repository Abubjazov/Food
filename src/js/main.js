import { tabHeaderHandler } from "./tabHeaders/tabHeaderHandler"
import { actionTimer } from "./timers/actionTimer"

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.tabheader__items').addEventListener('click', tabHeaderHandler)
    actionTimer('2021-10-19')
})
