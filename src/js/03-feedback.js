import throttle from 'lodash.throttle';

let data={"email":"","message":""};
form.addEventListener("input", throttle((event) => {
        if (event.target.nodeName==="INPUT") {
            data.email = event.target.value;
        } else if (event.target.nodeName==="TEXTAREA") {
            data.message = event.target.value;
        }
        if (data) {
            localStorage.setItem("feedback-form-state", JSON.stringify(data));
        }
    }, 500));
if (localStorage.getItem("feedback-form-state")) { 
        data = JSON.parse(localStorage.getItem("feedback-form-state"));
    }
    email.value = data.email;
    message.value = data.message;