import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

refs.form.addEventListener('input', e => {
    // console.log(e.target.name);
    // console.log(e.target.value);

    formData[e.target.name] = e.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    console.log(formData);
})
populateTextarea();

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}
function onTextareaInput(e) {
    const message = e.target.value;
    localStorage.setItem(STORAGE_KEY, message);
}
function populateTextarea() {
    const savedMassage = localStorage.getItem(STORAGE_KEY);
    if (savedMassage) {
        console.log(savedMassage);
        refs.textarea.value = savedMassage;
    }
}

// =====================================================================================
// console.log(localStorage);

// localStorage.setItem('my-data', JSON.stringify({ name: 'Mango', age: 2 }));

// const savedData = localStorage.getItem('my-data');

// console.log('savedData', savedData);

// const parsedData = JSON.parse(savedData);

// console.log('parsedData', parsedData);
// ==================================================================================




