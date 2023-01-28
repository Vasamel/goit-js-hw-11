// IMPORTS
import 'material-icons/iconfont/material-icons.css'; 
import axios from 'axios';
import Notiflix from 'notiflix';

// CONSTANTS
const API_KEY = '33191492-db34ec6b4d45385e7ce616240';
const BASE_URL = 'https://pixabay.com/api';
const searchForm = document.querySelector('.js-searchbar');

// FUNCTIONS
const onSubmit = (evt) => {
    evt.preventDefault();
    const searchQuery = evt.target.elements.query.value;

    console.dir(searchQuery);
    evt.target.reset();
}

// LISTENERS
searchForm.addEventListener('submit', onSubmit);


