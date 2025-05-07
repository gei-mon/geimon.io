const form = document.getElementById('form')
const username_input = document.getElementById('username-input')
const password_input = document.getElementById('password-input')
const repeat_password_input = document.getElementById('repeat-password-input')
const error_message = document.getElementById('error-message')

form.addEventListener('submit', (e) => {
    let errors = []

    if(repeat_password_input){
        errors = getSignupFormErrors(username_input.value, password_input.value, repeat_password_input.value)
    }
    else{
        errors = getLoginFormErrors(username_input.value, password_input.value)
    }

    if(errors.length > 0){
        e.preventDefault()
        error_message.innerText = errors.join(". ")
    }
})

function getSignupFormErrors(username, password, repeatPassword){
    let errors = []

    if(username === '' || username == null){
        errors.push('Username is required')
        username_input.parentElement.classList.add('incorrect')
    }

    if(password === '' || password == null){
        errors.push('Password is required')
        password_input.parentElement.classList.add('incorrect')
    }

    if(password !== repeatPassword){
        errors.push('Passwords do not match')
        repeat_password_input.parentElement.classList.add('incorrect')
    }

    if(errors == []){
        $myfile = fopen("userInfo.txt", "a+");
        $txt = username + "\n";
        fwrite($myfile, $txt);
        $txt = password + "\n";
        fwrite($myfile, $txt);
        fclose($myfile);
    }

    return errors;
}

function getLoginFormErrors(username, password){
    let errors = []

    if(username === '' || username == null){
        errors.push('Username is required')
        username_input.parentElement.classList.add('incorrect')
    }

    if(password === '' || password == null){
        errors.push('Password is required')
        password_input.parentElement.classList.add('incorrect')
    }
    return errors;
}

const allInputs = [username_input, password_input, repeat_password_input].filter(input => input != null)

allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect')
            error_message.innerText = ''
        }
    })
})

localStorage.setItem("username", username_input);
localStorage.setItem("password", password_input);

const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");