import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('.feedback-form input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    const formDataJson = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, formDataJson);
};

populateTextarea();

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = {};
};

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const savedParsed = JSON.parse(savedMessage);
    if (savedParsed) {
        refs.textarea.value = formData.message || "";
        refs.input.value = formData.email || "";
    }
};











