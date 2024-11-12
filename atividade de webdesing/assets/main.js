const galleryImageModal = document.querySelector('.popup')
const galleryBtClose = galleryImageModal.querySelector('.bt-close')
const galleryContent = galleryImageModal.querySelector('.content')
const imgs = document.querySelectorAll('.womp img')
const galleryBtNext = galleryImageModal.querySelector('.bt-next')
const galleryBtPrev = galleryImageModal.querySelector('.bt-prev')
let nextImg, prevImg = null

galleryBtClose.addEventListener('click', () => {
  galleryImageModal.close()
})

imgs.forEach(img => {
  img.addEventListener('click', () => {
    galleryContent.innerHTML = `<img src="${img.src}">`
    galleryImageModal.showModal()
  })
})

galleryBtNext.addEventListener('click', () => {
    galleryImageModal.close()
    nextImg.click()
})

galleryBtClose.addEventListener('click', () => {
       galleryImageModal.close()
})

function getNextimage(img) {
    return img.parentNode.nextElementSibling
    ? img.parentNode.nextElementSibling.querySelector('img')
    : imgs(imgs.length -1)
}

function getPrevimage(img) {
    return img.parentNode.previousElementSibling
    ? img.parentNode.previousElementSibling.querySelector('img')
    : imgs(imgs.length -1)
}

imgs.forEach(img => {
    img.addEventListener('click', () => {
        nextImg = getNextimage (img)
        prevImg = getPrevimage (img)
        galleryContent.innerHTML = `<img src="${img.src}">`
        galleryImageModal.showModal()
    })
})