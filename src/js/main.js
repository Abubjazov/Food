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
                tabContent.innerHTML = `
                    <div class="tabcontent">
                        <img src="img/tabs/vegy.jpg" alt="vegy">
                        <div class="tabcontent__descr">
                            Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Для людей, которые интересуются спортом; активных и здоровых. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!
                        </div>
                    </div>
                `
                break;

            case 'premium':
                tabContent.innerHTML = ''
                tabContent.innerHTML = `
                    <div class="tabcontent">
                        <img src="img/tabs/elite.jpg" alt="elite">
                        <div class="tabcontent__descr">
                            Меню “Премиум” - мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!                                     
                        </div>
                    </div>
                `
                break;

            case 'lenten':
                tabContent.innerHTML = ''
                tabContent.innerHTML = `
                    <div class="tabcontent">
                        <img src="img/tabs/post.jpg" alt="post">
                        <div class="tabcontent__descr">
                            Наше специальное “Постное меню” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения. Полная гармония с собой и природой в каждом элементе! Все будет Ом!                                     
                        </div>
                    </div>
                `
            break;

            case 'balanced':
                tabContent.innerHTML = ''
                tabContent.innerHTML = `
                    <div class="tabcontent">
                        <img src="img/tabs/vegy.jpg" alt="vegy">
                        <div class="tabcontent__descr">
                            Меню "Сбалансированное" - это соответствие вашего рациона всем научным рекомендациям. Мы тщательно просчитываем вашу потребность в к/б/ж/у и создаем лучшие блюда для вас.
                        </div>
                    </div>
                `
            break;

            default:
                break;
        }
    })    
})
