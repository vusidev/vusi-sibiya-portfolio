//DOM for nav bar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-list");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


//form validation
function validate() {
    const name = document.getElementById("name");
    if (name.value.trim()  == "") {
    document.getElementById("error1").innerHTML = "Please fill this field";
    document.getElementById("name").style.borderColor = "red";
    return false;
    } else {
    document.getElementById("error1").innerHTML = "";  
       }
    
    const email = document.getElementById("email").value;
         var atpos = email.indexOf("@");
        var dotpos = email.lastIndexOf(".");
        if (atpos < 2 || dotpos < atpos +2 || dotpos+2>=email.length)      {
    document.getElementById("error2").innerHTML = "Please enter valid email";
    document.getElementById("email").style.borderColor = "red";
    return false;
    } else {
    document.getElementById("error2").innerHTML = "";
    }
    
    
    const subject = document.getElementById("subject");
    if (subject.value.trim()  == "") {
    document.getElementById("error3").innerHTML = "Please fill this field";
    document.getElementById("subject").style.borderColor = "red";
    return false;
    } else {
    document.getElementById("error3").innerHTML = "";  
       }
    
       
    const message = document.getElementById("message");
    if (message.value.trim()  == "") {
    document.getElementById("error4").innerHTML = "Please fill this field";
    document.getElementById("message").style.borderColor = "red";
    return false;
    } else {
    document.getElementById("error4").innerHTML = "";  
       }
    
    return true;
    }