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
            timeNow = actionDate - timeNow

            days.textContent = ('0' + parseInt((timeNow / (1000 * 60 * 60 * 24)))).slice(-2)
            hours.textContent = ('0' + parseInt((timeNow / (1000 * 60 * 60)) % 24)).slice(-2)
            minutes.textContent = ('0' + parseInt((timeNow / (1000 * 60)) % 60)).slice(-2)
            seconds.textContent = ('0' + parseInt((timeNow / 1000) % 60)).slice(-2)
        }        
    }
}
