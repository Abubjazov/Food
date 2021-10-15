import { BALANCED, FITNESS, LENTEN, PREMIUM } from "./types"

document.addEventListener('DOMContentLoaded', () => {
    const tabHeaders = document.querySelectorAll('.tabheader__item'),
          tabContent = document.querySelector('.tabcontent')

    document.querySelector('.tabheader__items').addEventListener('click', event => {
        event.preventDefault()

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
    })    
})
