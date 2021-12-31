const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const Password = document.getElementById('Password');
const Password2 = document.getElementById('Password2');

//show input error
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error '
    const small = formControl.querySelector('small')
    small.innerText = message;
}
//show success
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success '
}
///check email is valid
function isValidEmail(){
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

///Check required

function checkRequired(inputArr){
    inputArr.forEach(function(input){
        console.log(input.id[0].toUpperCase())
       if(input.value.trim()=== ''){
           showError(input,`${input.id} is required`);
       }else{
           showSuccess(input);
       }
    })
}
//Check input length
function checkLength(input,min,max){
     if(input.value.length < min){
        showError(input,`${getFieldName(input)}must be at least ${min}`)
     }else if(input.value.length> max){
        showError(input,`${getFieldName(input)}must be less than ${max}`)
     }else{
         showSuccess(input);
     }
}
   

/// Event listeners
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkRequired([username,email,Password,Password2])
    checkLength(username,3,15);
    checkLength(password,6,25);
})