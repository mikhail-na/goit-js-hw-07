import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);


//* Необхідно трохи змінити розмітку картки галереї, використовуй цей шаблон.

// <li class="gallery__item">
//    <a class="gallery__link" href="large-image.jpg">
//       <img class="gallery__image" src="small-image.jpg" alt="Image description" />
//    </a>
// </li>

//* Виконуй це завдання у файлах 02-lightbox.html і 02-lightbox.js. Розбий його на декілька підзавдань:

//? Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
//?  Використовуй готовий код з першого завдання.

//? Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs. 
//? Необхідно додати посилання на два файли: simple - lightbox.min.js і simple - lightbox.min.css.

//? Ініціалізація бібліотеки після створення і додання елементів галереї у ul.gallery. 
//? Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».

//? Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. 
//? Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.


//* ==============================================
// let gallery = new SimpleLightbox('.gallery');
// gallery.on('show.simplelightbox', function () {
// 	// do something…
// });
//* ==============================================


const galleryListEl = document.querySelector('.gallery')


const createGalleryMarkup = galleryItems.map(img =>
   `<li class="gallery__item">
      <a class="gallery__link" href="${img.original}">
         <img class="gallery__image" src="${img.preview}" 
         alt="${img.description}" />
      </a>
   </li>`
).join('');

galleryListEl.innerHTML = createGalleryMarkup;

 
const lightbox = new SimpleLightbox('.gallery a', {
   captionsData: 'alt',
   captionsDelay: 300,
   animationSpeed: 250,
});


