export const actionTimer = () => {
    const days = document.querySelector('#days'),
          hours = document.querySelector('#hours'),
          minutes = document.querySelector('#minutes'),
          seconds = document.querySelector('#seconds'),
          actionTime = (new Date(2021, 9, 17)).getTime()

    const actionTimer = setInterval(action, 1000)
    
    function action() {
        let   timeNow = (new Date()).getTime()

        if (timeNow >= actionTime) {
            days.textContent = '00'
            hours.textContent = '00'
            minutes.textContent = '00'
            seconds.textContent = '00'

            clearInterval(actionTimer)
        } else {
            timeNow = actionTime - timeNow

            days.textContent = ('0' + parseInt((timeNow / (1000 * 60 * 60 * 24)))).slice(-2)
            hours.textContent = ('0' + parseInt((timeNow / (1000 * 60 * 60)) % 24)).slice(-2)
            minutes.textContent = ('0' + parseInt((timeNow / (1000 * 60)) % 60)).slice(-2)
            seconds.textContent = ('0' + parseInt((timeNow / 1000) % 60)).slice(-2)
        }        
    }
}
