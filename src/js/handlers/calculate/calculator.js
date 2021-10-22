export const calculator = (initialData) => {
    const {sex, activity, weight, height, age} = initialData
    let BMR = 0

    if (sex) {
        BMR = 88.36 + (13.4 * +weight) + (4.8 * +height) - (5.7 * +age)
    } else {
        BMR = 74.6 + (9.2 * +weight) + (3.1 * +height) - (4.3 * +age)
    }

    switch (activity) {
        case 'low':
            return parseInt(BMR * 1.2)

        case 'small':
            return parseInt(BMR * 1.375)

        case 'medium':
        return parseInt(BMR * 1.55)

        case 'high':
        return parseInt(BMR * 1.725)
    
        default:
            break
    }    
}


