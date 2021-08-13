const stoploader = () => {
    const loader = document.getElementById('loader')
    const mainloader = document.getElementById('mainloader')

    mainloader.style.opacity = "0"

    setTimeout(() => {
        loader.style.opacity = "0"
    }, 1000)

    setTimeout(() => {
        loader.style.display = "none"
    }, 500)
}