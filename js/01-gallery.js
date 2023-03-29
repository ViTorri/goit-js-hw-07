import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

function createGalleryMarkup(images) {
    return images.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
  <a class="gallery__link" href="${original}" onclick="event.preventDefault()"> 
    <img
      class="gallery__image"
      loading="lazy"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    }).join("");
}

// onclick="event.preventDefault() - отключает у ссылки поведение по умолчанию

console.log(createGalleryMarkup(galleryItems));

const imagesGallery = document.querySelector('.gallery');
const imageMarkup = createGalleryMarkup(galleryItems);

imagesGallery.insertAdjacentHTML('beforeend', imageMarkup);

imagesGallery.addEventListener('click', onImageClick);

function onImageClick(event) {
     event.preventDefault();

    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    const originalImageSource = event.target.dataset.source;
    console.log(originalImageSource);

// Изображение в коде содержит атрибут data-source, который равен значению original из массива galleryItems. Затем в обработчике событий onImageClick это значение извлекается из атрибута data-source элемента <img> при помощи свойства dataset.

    const instance = basicLightbox.create(`
    <img src="${originalImageSource}" width="800" height="600">`);
    instance.show();

    imagesGallery.addEventListener('keydown', keydownHandler);
    
    const keydownHandler = (event) => {
        if (event.code === "Escape") {
            instance.close();
        }
    };
    imagesGallery.removeEventListener('keydown', keydownHandler);
}

