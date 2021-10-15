import { tabHeaderHandler } from "./tabHeaderHandler"

document.addEventListener('DOMContentLoaded', () => {    

    document.querySelector('.tabheader__items').addEventListener('click', tabHeaderHandler)
})
