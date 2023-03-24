import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryListEl = document.querySelector('.gallery');
galleryListEl.addEventListener('click', onClick);



const createGalleryMarkup = galleryItems.map(img => 
    `<li class="gallery__item">
  <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
</li>`
).join('');

galleryListEl.innerHTML = createGalleryMarkup;




const instance = basicLightbox.create(`
    <img src="" width="800" height="auto">`, 
{

    onShow: (instance) => {
        window.addEventListener('keydown', onEscKeyPress)
    },
    onClose: (instance) => {
        window.removeEventListener('keydown', onEscKeyPress)
    },
});

const onEscKeyPress = (event) => {
    if (event.code !== 'Escape') {
        return;
    }
    instance.close();
};

function onClick (event)  {
    event.preventDefault();
    if (!event.target.dataset.source) {
        return;
    }
    instance.element().querySelector('img').src = event.target.dataset.source;
    instance.show();
};


