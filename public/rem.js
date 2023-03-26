function remSize(){
    const baseSize = 16
    const baseWidth = 420
    let devWidth = window.innerWidth || document.documentElement.clientWidth
    let scale = devWidth / baseWidth
    document.documentElement.style.fontSize = scale * baseSize + 'px'
}
remSize()
window.addEventListener('resize',()=>{
    remSize()
})