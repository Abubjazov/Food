export class MenuItem {
    constructor({image, title, desc, price}) {
        this.image = image
        this.title = title
        this.desc = desc
        this.price = price
    }

    renderMenu() {
        return `
            <div class="menu__item">
                <img src="${this.image}" alt="menu_item">
                <h3 class="menu__item-subtitle">Меню "${this.title}"</h3>
                <div class="menu__item-descr">${this.desc}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${ this.price}</span> грн/день</div>
                </div>
            </div>
        `
    }
}
