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

        const formData = new FormData(form)

        const obj = {}
        
        formData.forEach((val, key) => {
            obj[key] = val
        })

        const json = JSON.stringify(obj)

        fetch('server.php', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: json
        })
        .then(data => {
            console.log(data)
            statusMsg.textContent = message.success
            setTimeout(() => {
                statusMsg.remove()
            }, 2000)
        })
        .catch(() => {
            statusMsg.textContent = message.failure
        })
        .finally(() => {
            form.reset()
        })
    })
}
