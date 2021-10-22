import { calculator } from "./calculator"

export const calculateHandler = (e) => {
    const calculating = document.querySelector('.calculating__field'),
          inputs = calculating.querySelectorAll('input')

    if (e.target.nodeName === "DIV" && e.target.classList.contains('calculating__choose-item')) {
        const childrenList = e.target.parentNode.children
     
        for (let item of childrenList) {
            item.classList.remove('calculating__choose-item_active')
        }

        e.target.classList.add('calculating__choose-item_active')
    }

    let calcReady = []

    for (let item of inputs) {
        if (item.value) {
            calcReady.push(true)
            item.style.background = ''
        } else {
            calcReady.push(false)
            item.style.background = 'silver'
        }
        
    }

    if (calcReady.every(i => i === true)) {
        const initialData = {
            sex: calculating.querySelector('#gender > .calculating__choose-item_active').innerText.toLowerCase() === 'мужчина' ? true : false,
            activity: calculating.querySelector('.calculating__choose_big > .calculating__choose-item_active').id, 
            weight: calculating.querySelector('#weight').value, 
            height: calculating.querySelector('#height').value, 
            age: calculating.querySelector('#age').value
        }

        calculating.querySelector('.calculating__result > span').innerText = calculator(initialData)
    }
}
