const message = {
    loading: 'Загрузка',
    success: 'Успешно',
    failure: 'Ошибка'
}

export const postData = (form) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const statusMsg = document.createElement('div')

        statusMsg.textContent = message.loading
        form.append(statusMsg)

        const formData = new FormData(form)

        const json = JSON.stringify(Object.fromEntries(formData.entries()))

        fetch('http://localhost:3000/requests', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: json
        })
        .then(data => {
            statusMsg.textContent = message.success
            setTimeout(() => {
                statusMsg.remove()
            }, 2000)
        })
        .catch(() => {
            statusMsg.textContent = message.failure
            setTimeout(() => {
                statusMsg.remove()
            }, 2000)
        })
        .finally(() => {
            form.reset()
        })
    })
}
