// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

for (let el of galleryItems) 
document.querySelector('.gallery').insertAdjacentHTML('beforeEnd', `<div class="gallery__item"><a class="gallery__link" href="${el.original}"><img class="gallery__image" src ="${el.preview}" data-source = "${el.original}" alt ="${el.description}"></a></div>`);


const galleryContainer = document.querySelector(".gallery");


let instance = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

galleryContainer.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      instance.close()
    }
  });


console.log(galleryItems);

