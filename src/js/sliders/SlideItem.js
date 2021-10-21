export class SlideItem {
    constructor({image, alt}) {
        this.image = image
        this.alt = alt
    }

    renderSlide() {
        return `
            <div class="offer__slide">
                <img src="${this.image}" alt="${this.alt}">
            </div>
        `
    }
}
