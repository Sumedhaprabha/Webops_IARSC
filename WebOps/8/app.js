//Object to store value from input in the html page
const pwd = document.getElementById("pwd");

//manages an event in the html page
pwd.addEventListener("input",()=>{ 
    const passbox = document.querySelector('.passbox');
    const passtext = document.querySelector('.passtext');
    const passpattern = /(?=.*[\!\@\#\$\%\^\&\*\,\.\<\>\?\(\)])(?=.*[a-z])(?=.*[A-Z]).{8,}/; //Object to store conditions
   
    //If condition to check for a valid password
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
