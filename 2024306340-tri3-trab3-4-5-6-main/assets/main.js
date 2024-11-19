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

galleryBtPrev.addEventListener('click', () => {
  galleryImageModal.close()
  prevImg.click()
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




function digitarTexto(elemento, intervalo) {
  const texto = elemento.textContent;
  elemento.textContent = '';
  let index = 0;
  elemento.style.visibility = 'visible';

  return new Promise((resolve) => {
    const timer = setInterval(() => {
      elemento.textContent += texto[index];
      index++;

      if (index == texto.length) {
        clearInterval(timer);
        resolve();
      }

    }, intervalo);
  });
}

async function textos() {
  const paragrafos = document.querySelectorAll('.textoPog');

  for (let i = 0; i < paragrafos.length; i++) {
    await digitarTexto(paragrafos[i], 100);
  }
  
}



document.addEventListener('DOMContentLoaded', async () => {
  await textos();
});