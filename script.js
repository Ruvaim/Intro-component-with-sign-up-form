// const form = document.getElementById('form');
// const firstName = document.getElementById('firstName');
// const lastName = document.getElementById('lastName');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// // const error = document.getElementsByClassName('error');
// // const errorSign = document.getElementsByClassName('errorSign');

// // console.log(errorSign);


// function clear(id, name, vname){
//     document.getElementById(id).innerText = "";

//         name.classList.add('hide');
//         vname.style.borderColor = "none";
// }

// var validation = () => {
//     // clear();

//     let result= 1;

//     if (firstName.value == "") {
//         let firstError = document.getElementById('firstNameErrorSign');
//         document.getElementById('firstNameError').innerText = "First Name cannot be empty";

//         firstError.classList.remove('hide');
//         firstName.style.borderColor = "hsl(0, 100%, 74%)";
//         // console.log(firstError);
//         result=0;
//         return result;
//     }else{
//         let firstError = document.getElementById('firstNameErrorSign');
//         document.getElementById(firstNameError).innerText= "";

//         firstError.classList.add('hide');
//         // firstName.style.borderColor = "none";
//         // clear(firstNameError, firstError, firstName);
//         result=1;
//         // return result;
//     }

//     if (lastName.value == "") {
//         document.getElementById('lastNameError').innerHTML = "Last Name cannot be empty";

//         let lastError = document.getElementById('lastNameErrorSign');
//         lastError.classList.remove('hide');
//         lastName.style.borderColor = "hsl(0, 100%, 74%)";
//         console.log("connected");
//         // result2=false;
//     }
//     // else{
//     //     clear(lastNameError, lastError, lastName);
//     //     result2=true;
//     // }

//     if (result1 && result2) {
//         // var result1 = true
//         let result = true;
//         return result;
//     }
//     return false;

//     // if (firstName.value == "") {
//     //     document.getElementById('firstNameError').innerHTML = "Looks like this is not an email";
//     //     console.log("connected");
//     // }
//     // if (firstName.value == "") {
//     //     document.getElementById('firstNameError').innerHTML = "Password cannot be empty";
//     //     console.log("connected");
//     // }
// }

const form = document.querySelector('.card form');
const inputs = document.querySelectorAll(".card input")
// console.log(inputs);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    inputs.forEach((input) => {
        if (!input.value) {
            input.parentElement.classList.add('error');
        } else {
            input.parentElement.classList.remove('error');
            if (input.type == "email") {
                if (validateEmail(input.value)) {
                    input.parentElement.classList.remove('error');
                } else {
                    input.parentElement.classList.add('error');
                }
            }
        }
    })
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}