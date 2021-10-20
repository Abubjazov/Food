const message = {
    loading: 'Загрузка',
    success: 'Успешно',
    failure: 'Ошибка'
}

export function postData(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const statusMsg = document.createElement('div')

        statusMsg.textContent = message.loading
        form.append(statusMsg)

        const request = new XMLHttpRequest()

        request.open('POST', 'server.php')
        request.setRequestHeader('Content-type', 'application/json')

        const formData = new FormData(form)

        const obj = {}
        
        formData.forEach((val, key) => {
            obj[key] = val
        })

        const json = JSON.stringify(obj)

        request.send(json)

        request.addEventListener('load', () => {
            if (request.status === 200) {
                console.log(request.response)
                statusMsg.textContent = message.success
                form.reset()
                setTimeout(() => {
                    statusMsg.remove()
                }, 2000)
            } else {
                statusMsg.textContent = message.failure
            }
        })
    })
}
