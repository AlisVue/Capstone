
let submitForm = document.getElementById("signUp");
submitForm.addEventListener("submit", validate);

function validate(e){
    let firstName = "";
    let lastName = "";
    let email ="";
    e.preventDefault();
    
    if (validateFirstName()) firstName = validateFirstName();
    if (validateLastName()) lastName = validateLastName();
    if (validateEmail()) email = validateEmail();

    if (firstName != "" && lastname != ""){
        alert("First Name" + firstName + 
              "Last Name" + lastName
                );
    }

}

function validateFirstName(){
    let firstNameTag = document.getElementById("firstNameLabel");
    let pTag = document.createElement("p");

    let firstNameText = document.signUpForm.firstName.value;

    if (firstNameText == ""){
        document.signUpForm.firstName.focus();
        firstNameTag.appendChild(pTag);
        pTag.innerHTML = "First Name cannot be empty"
        pTag.style.color = "red";

        return false;
    } else if (firstNameText.includes(" ")){
        document.signUpForm.firstName.focus();
        firstNameTag.appendChild(pTag);
        pTag.innerHTML = "No spaces allowed";
        pTag.style.color = "red"

        return false
    } else{
        return firstNameText;
    }
}

function validateLastName(){
    let lastNameTag = document.getElementById("lastNameLabel");
    let pTag = document.createElement("p");

    let lastNameText = document.signUpForm.LastName.value;

    if (lastNameText == ""){
        document.signUpForm.lastName.focus();
        lastNameTag.appendChild(pTag);
        pTag.innerHTML = "Last Name cannot be empty"
        pTag.style.color = "red";

        return false;
    } else if (lastNameText.includes(" ")){
        document.signUpForm.lastName.focus();
        lastNameTag.appendChild(pTag);
        pTag.innerHTML = "No spaces allowed";
        pTag.style.color = "red"

        return false
    } else {
        return lastNameText;
    }

}

function validateEmail(){
    let emailTag = document.getElementById("emailLabel");
    let pTag = document.createElement("p");

    let emailText = document.signUpForm.email.value;

    let emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');


    if (emailText == ""){
        document.signUpForm.email.focus();
        emailTag.appendChild(pTag);
        pTag.innerHTML = "Email cannot be empty"
        pTag.style.color = "red";
        
        return false;
    } else if (emailText.includes(" ")){
        document.signUpForm.email.focus();
        emailTag.appendChild(pTag);
        pTag.innerHTML = "No spaces allowed";
        pTag.style.color = "red"

        return false
    } else if (!emailRegex.test(emailText)) {
        document.signUpForm.email.focus();
        emailTag.appendChild(pTag);
        pTag.innerHTML = "Not an email";
        pTag.style.color = "red"
        return false;
    } else{
        return emailText;
    }

}

function validatePassword() {
    let paswordTag = document.getElementById("passwordLabel");
    let pTag =  document.createElement("p");

    let passwordText = document.signUpForm.password.value;

    let passwordRegex = new RegExp('[a-zA-z0-9]+')

    if (passwordText == ""){
        document.signUpForm.password.focus();
        passwordTag.appendChild(pTag);
        pTag.innerHTML = "Password cannot be empty";
        pTag.style.color = "red"

        return false;
    }else if (passwordText.includes(" ")) {
        document.signUpForm.password.focus();
        passwordTag.appendChild(pTag);
        pTag.innerHTML = "No spaces allowed";
        pTag.style.color = "red";

        return false
    }else if (passwordText.length < 8 || passwordText.length > 20) {
        document.signUpForm.password.focus();
        paswordTag.appendChild(pTag);
        pTag.innerHTML = "Password must be between 8-20 characters";
        pTag.style.color = "red";

        return false
    }else if (!passwordRegex.test(passwordText)) {
        document.signUpForm.password.focus();
        paswordTag.appendChild(pTag);
        pTag.innerHTML = "Password can only contain letters and numbers";
        pTag.style.color = "red"

        return false
    }
}