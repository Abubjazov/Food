import { SlideItem } from "./SlideItem"

export const renderSlide = (slideData) => {    
    return new SlideItem(slideData).renderSlide()
}
