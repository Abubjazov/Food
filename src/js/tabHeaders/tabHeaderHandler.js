import { BALANCED, FITNESS, LENTEN, PREMIUM } from "./tabHeadersTypes"

export const tabHeaderHandler = event => {
    event.preventDefault()

    const tabHeaders = document.querySelectorAll('.tabheader__item'),
          tabContent = document.querySelector('.tabcontent')

    tabHeaders.forEach(tabheader => {
        tabheader.classList.remove('tabheader__item_active')
    })

    event.target.classList.add('tabheader__item_active')

    switch (event.target.dataset.item) {
        case 'fitness':
            tabContent.innerHTML = ''
            tabContent.innerHTML = FITNESS
            break;

        case 'premium':
            tabContent.innerHTML = ''
            tabContent.innerHTML = PREMIUM
            break;

        case 'lenten':
            tabContent.innerHTML = ''
            tabContent.innerHTML = LENTEN
            break;

        case 'balanced':
            tabContent.innerHTML = ''
            tabContent.innerHTML = BALANCED
            break;

        default:
            break;
    }
} 
