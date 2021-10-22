import { calculator } from "./calculator"

export const setCalculate = () => {
    const initialData = JSON.parse(localStorage.getItem('initialData'))

    if (initialData) {
        const {sex, activity, weight, height, age} = initialData,
              sexElem = document.querySelector('#gender').children,
              heightInput = document.querySelector('#height'),
              weightInput = document.querySelector('#weight'),
              ageInput = document.querySelector('#age'),
              activityElem = document.querySelector('.calculating__choose_big').children

        for (let item of sexElem) {
            item.classList.remove('calculating__choose-item_active')
        }

        sex ? sexElem[1].classList.add('calculating__choose-item_active') : sexElem[0].classList.add('calculating__choose-item_active')

        for (let item of activityElem) {
            item.classList.remove('calculating__choose-item_active')
        }

        switch (activity) {
            case 'low':
                activityElem[0].classList.add('calculating__choose-item_active')
                break

            case 'small':
                activityElem[1].classList.add('calculating__choose-item_active')
                break
    
            case 'medium':
                activityElem[2].classList.add('calculating__choose-item_active')
                break
    
            case 'high':
                activityElem[3].classList.add('calculating__choose-item_active')
                break
        
            default:
                break
        }

        if (weight) {weightInput.value = weight}
        if (height) {heightInput.value = height}
        if (age) {ageInput.value = age}

        if (weight && height && age) {document.querySelector('.calculating__result > span').innerText = calculator(initialData)}
    }
} 
