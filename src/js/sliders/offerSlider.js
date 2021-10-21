import { renderSlide } from "./renderSlide"
import { SLIDES } from "./slideTypes"

export const offerSlider = () => {
    const slider = document.querySelector('.offer__slider'),
          sliderWrapper = slider.querySelector('.offer__slider-wrapper'),
          currentSlide = slider.querySelector('#current'),
          border = SLIDES.length

    sliderWrapper.innerHTML = ''
    sliderWrapper.innerHTML = renderSlide(SLIDES[+currentSlide.innerHTML - 1])

    slider.addEventListener('click', e => {
        e.preventDefault()

        if (e.target.classList.contains('offer__slider-next')) {

            if (+currentSlide.innerHTML < border) {
                currentSlide.innerHTML = `0${+currentSlide.innerHTML + 1}`
            } else {
                currentSlide.innerHTML = '01'
            }
            

            sliderWrapper.innerHTML = ''
            sliderWrapper.innerHTML = renderSlide(SLIDES[+currentSlide.innerHTML - 1])
        }

        if (e.target.classList.contains('offer__slider-prev')) {
            if (+currentSlide.innerHTML < 2) {
                currentSlide.innerHTML = `0${border}`
            } else {                
                currentSlide.innerHTML = `0${+currentSlide.innerHTML - 1}`
            }

            sliderWrapper.innerHTML = ''
            sliderWrapper.innerHTML = renderSlide(SLIDES[+currentSlide.innerHTML - 1])
        }
    })
}
