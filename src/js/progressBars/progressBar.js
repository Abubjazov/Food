export const progressBar = () => {
    const progressBar = document.querySelector('.progressbar')

    progressBar.style.width = (document.scrollingElement.scrollTop * 100) / (document.scrollingElement.scrollHeight - document.scrollingElement.clientHeight) + '%'
}
