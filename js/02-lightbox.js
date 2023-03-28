import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

function createGalleryMarkup(images) {
    return images.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
   <a class="gallery__link" data-lightbox="gallery" onclick="event.preventDefault()" href="${original}">
      <img class="gallery__image lightbox" 
      src="${preview}" 
      alt="${description}" />
   </a>
</li>`
    }).join("");
}

console.log(createGalleryMarkup(galleryItems));

const gallery = document.querySelector('.gallery');
const imageMarkup = createGalleryMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', imageMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

gallery.addEventListener('click', onImageClick);

function onImageClick(event) {
    if (!event.target.classList.contains("gallery__image")) {
        return;
    }
    console.log(event.target.src);

};
