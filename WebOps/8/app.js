const email = document.getElementById("email");
const pwd = document.getElementById("pwd");

pwd.addEventListener("input",()=>{
    const passbox = document.querySelector('.emailbox');
    const passtext = document.querySelector('.emailtext');
    const passpattern = /(?=.*[\!\@\#\$\%\^\&\*\,\.\<\>\?\(\)])(?=.*[a-z])(?=.*[A-Z]).{8,}/;
   
    if(pwd.nodeValue.match(passpattern))
    {
        passbox.classList.add('valid');
        passbox.classList.remove('invalid');
        passtext.innerHTML = "Valid password";
    }
    else
    {
        passbox.classList.add('invalid');
        passbox.classList.remove('valid');
        passtext.innerHTML = "Password must contain atleast 8 characters, atleast one uppercase, one lowercase and one special character.";
    }
}
)
