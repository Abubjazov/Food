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
        // request.setRequestHeader('Content-type', 'multipart/form-data')

        const formData = new FormData(form)

        request.send(formData)

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
