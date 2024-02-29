const box = document.querySelector('.box')
const offsetX = document.querySelector('.offsetX')
const offsetY = document.querySelector('.offsetY')
const blur = document.querySelector('.blur')
const stretch = document.querySelector('.stretch')
const color = document.querySelector('.color')
const output = document.querySelector('.output')
const inset = document.querySelector('.inset')

const arr = [offsetX, offsetY, blur, stretch, color, output, inset]
function boxShadowGeneration () {
    let insetValue = ''
    if (inset.checked) {
        insetValue = 'inset'
    }
    box.style.boxShadow = `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${stretch.value}px ${color.value} ${insetValue}`
    output.innerText = box.style.boxShadow
}
arr.forEach(el => {
    el.addEventListener('input', boxShadowGeneration)
})