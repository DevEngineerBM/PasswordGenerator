
const passwordInput = document.getElementById('Password');
const generate = document.getElementById('btn');

function generatePassword() {

    const caracters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?:{}[]';

    const length = 12;
    let password = '';

    for ( let i = 0 ; i < length ; i++) {

const randomx = Math.floor(Math.random() * caracters.length)

password += caracters.charAt(randomx)

/* password = password + charset.charAt(randomx) */
    }

passwordInput.value = password;

}


 generate.addEventListener('click', generatePassword);

