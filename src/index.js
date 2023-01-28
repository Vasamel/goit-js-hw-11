// IMPORTS
import Notiflix from 'notiflix';
import 'material-icons/iconfont/material-icons.css';
import { renderMarkup } from './js/renderMarkup';
import { refs } from './js/refs';
import { fetchImages } from './js/api';

// VARIABLES
let page = 1;
let searchQuery = '';

// FUNCTIONS
// Функція отправки даних на Pixabay
const onSubmit = async evt => {
  evt.preventDefault();
  // Беремо значення із інпута
  searchQuery = evt.target.elements.query.value;
  // Скидаємо сторінку
  page = 1;
  // Очищуємо галерею
  refs.galleryContainer.innerHTML = '';
  // Створити запит
  try {
    const request = await fetchImages(searchQuery, page);
    // Відмальовуємо розмітку
    renderMarkup(request.hits, refs.galleryContainer);
  } catch (error) {
    console.error(error);
  }

  // Очищуємо форму
  evt.target.reset();
};

// Функція для завантаження даних по кліку
const onLoadMore = async () => {
  page = page + 1;

  try {
    const request = await fetchImages(searchQuery, page);
    // Відмальовуємо розмітку
    renderMarkup(request.hits, refs.galleryContainer);
  } catch (error) {
    console.error(error);
  }
};

// LISTENERS
refs.searchForm.addEventListener('submit', onSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMore);
