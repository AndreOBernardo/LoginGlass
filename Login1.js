const init = () => {
    const validateEmail =(event) => {
        const input = event.currentTarget;
        const regex =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const emailTest = regex.test(input.value);

        if(!emailTest){
            submitButton.setAttribute('disabled', 'disabled')
            input.elementSibling.classList.add('error')
        }else{
            submitButton.removeAttribute('disabled', 'disabled')
            input.elementSibling.classList.remove('error')
        }
    }

    const inputEmail = document.querySelector('input[type="email"]');
    const inputPassword = document.querySelector('input[type="password"]');
    const submitButton = document.querySelector('input[type="button"]');

    inputEmail.addEventListener('input', validateEmail);
    
    if (submitButton) {
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();
            fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    email: inputEmail.value,
                    password: inputPassword.value,
                })
            }).then((response) => {
                return response.json();
            }).then((data) =>{
                console.log(data)
            })
        })
    }
}

window.onload = init;

/*  */

var pass = $('#pass');
var olho= $("#olho");

olho.mousedown(function() {
  pass.attr("type", "text");
});

olho.mouseup(function() {
  pass.attr("type", "password");
});

$( "#olho" ).mouseout(function() { 
  $("#pass").attr("type", "password");
});

