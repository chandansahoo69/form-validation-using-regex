const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const phone = document.getElementById('phone');

//add event

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validate();
})
function validate() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    const phoneVal = phone.value.trim();

    //validate username
    if(usernameVal === ""){
        setErrorMessage(username,'Username cannot be blank');
    }else if(usernameVal.length <= 2){
        setErrorMessage(username,'Username minimum 3 character');
    }else{
        setSuccessMessage(username);
    }
    //validate username
    if(emailVal === ""){
        setErrorMessage(email,'email cannot be blank');
    }else if(!isEmail(emailVal)){
        setErrorMessage(email,'Not a valid email');
    }else{
        setSuccessMessage(email);
    }
    //validate phone
    if(phoneVal === ""){
        setErrorMessage(phone,'phone cannot be blank');
    }else if(phoneVal.length != 10){
        setErrorMessage(phone,'Not a valid phone number');
    }else{
        setSuccessMessage(phone);
    }
    //validate password
    if(passwordVal === ""){
        setErrorMessage(password,'password cannot be blank');
    }else if(passwordVal.length < 7){
        setErrorMessage(password,'Minimum 6 character');
    }else{
        setSuccessMessage(password);
    }
    //validate password
    if(cpasswordVal === ""){
        setErrorMessage(cpassword,'confirm password cannot be blank');
    }else if(passwordVal != cpasswordVal){
        setErrorMessage(cpassword,'Password are not matching');
    }else{
        setSuccessMessage(cpassword);
    }

    successMsg(usernameVal);

}

function isEmail(emailVal){
    let atSymbol = emailVal.indexOf("@");
    if(atSymbol < 1)
        return false;
    let dot = emailVal.lastIndexOf(".");
    if(dot <= atSymbol + 2)
        return false;
    if(dot === emailVal.length - 1)
        return false;
    return true;
}

function setErrorMessage(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}
function setSuccessMessage(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
function successMsg(usernameVal){
    let formCon = document.getElementsByClassName('form-control');
    let count = formCon.length - 1;
    for(let i=0;i<formCon.length;i++){
        if(formCon[i].className === "form-control success"){
            let sRate = 0 + i;
           // console.log(sRate);
            sendData(usernameVal,count,sRate);
        } else {
            return false;
        }
    }
}
function sendData(usernameVal,count,sRate){
    if(sRate === count){
        //alert('registration successful');
        swal("Welcome! "+usernameVal, "Registration Successful", "success");
        //location.href = `demo.html?username=${usernameVal}`;
    }
}


//show and hide function
let inputPass = document.querySelector('.pswrd');
let show = document.querySelector('.show');
show.addEventListener('click', showHide);
function showHide(){
    if(inputPass.type === 'password'){
        inputPass.type = 'text';
        show.style.color = '#1DA1F2';
        show.textContent = 'HIDE';
    } else {
        inputPass.type = 'password';
        show.textContent = 'SHOW';
        show.style.color = '#111';
    }
}
