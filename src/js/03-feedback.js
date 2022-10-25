import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {"email":"","message":""};

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('.feedback-form input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
// refs.input.addEventListener('input', (onEmailInput);


refs.form.addEventListener('input', e => {
    
    formData[e.target.name] = e.target.value;
    console.log(formData);

    const formDataJson = JSON.stringify(formData);
    localStorage.setItem('STORAGE_KEY', formDataJson);
});

populateTextarea();

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function onTextareaInput(e) {
    const message = e.target.value;
    localStorage.setItem(STORAGE_KEY, message);
};

// function populateTextarea() {
//     const savedMessage = localStorage.getItem(STORAGE_KEY);
//     if (savedMessage) {
//         console.log(savedMessage);
//         refs.textarea.value = savedMessage;
//         // refs.input.value = savedMessage;
//     }
// };

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const savedParsed = JSON.parse(savedMessage);
    if (savedParsed) {
        formData = savedParsed;
        console.log(savedParsed);
        refs.textarea.value = formData.message;
        refs.input.value = formData.email;
    }
};






// populateInput();

// function onEmailInput(e) {
//     const email = e.target.value;
//     localStorage.setItem(STORAGE_KEY, email);

// function populateInput() {
//     const savedEmail = localStorage.getItem(STORAGE_KEY);
//     if (savedEmail) {
//         console.log(savedEmail);
//         refs.input.value = savedEmail;
//     }
// };






