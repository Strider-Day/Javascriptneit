// JavaScript Document

var person = {
    fname: ``,
    lname: ``,
    email: ``,
    phone: ``
}

var first = document.querySelector(`#first-name`)
var last = document.querySelector(`#last-name`)
var email = document.querySelector(`#email`)
var cemail = document.querySelector(`#cemail`)
var phone = document.querySelector(`#phone`)
var button = document.querySelector(`#submit`)

console.log(first)

button.addEventListener(`click`, check)

function check(){
    let pfirst = /^[A-Za-z][A-Z\-a-z]{1,}$/
    let pemail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    let pnumber = /^[0-9]{10}/

    if (pfirst.test(first.value) === false){
        first.nextElementSibling.innerHTML = "Invalid First Name!"
        
    }

    if (pfirst.test(last.value) === false){
        last.nextElementSibling.innerHTML = "Invalid Last Name!"
    }

    if (pemail.test(email.value) === false){
        email.nextElementSibling.innerHTML = "Invalid Email!"
    }

    if (pemail.test(cemail.value) === false){
        cemail.nextElementSibling.innerHTML = "Invalid Email!"
    }

    if (pnumber.test(phone.value) === false){
        phone.nextElementSibling.innerHTML = "Invalid Phone!"
    }

    if (email.value != cemail.value){
        cemail.nextElementSibling.innerHTML = "Emails do not Match!"
    }
}

    



