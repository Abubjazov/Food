export const actionTimer = (date) => {
    const days = document.querySelector('#days'),
          hours = document.querySelector('#hours'),
          minutes = document.querySelector('#minutes'),
          seconds = document.querySelector('#seconds'),
          actionDate = Date.parse(date)

    const timer = setInterval(updateTimer, 1000)
    
    function updateTimer() {
        let   timeNow = (new Date()).getTime()

        if (timeNow >= actionDate) {
            days.textContent = '00'
            hours.textContent = '00'
            minutes.textContent = '00'
            seconds.textContent = '00'

            clearInterval(timer)
        } else {
            const time = remainingTimeParse(actionDate - timeNow)

            days.textContent = time.days
            hours.textContent = time.hours
            minutes.textContent = time.minutes
            seconds.textContent = time.seconds
        }        
    }

    function remainingTimeParse(time) {
        return {
            days: ('0' + parseInt((time / (1000 * 60 * 60 * 24)))).slice(-2),
            hours: ('0' + parseInt((time / (1000 * 60 * 60)) % 24)).slice(-2),
            minutes: ('0' + parseInt((time / (1000 * 60)) % 60)).slice(-2),
            seconds: ('0' + parseInt((time / 1000) % 60)).slice(-2)
        }
    }
}
