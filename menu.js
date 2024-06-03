// script.js
function toggleMenu() {
    var navbarNav = document.getElementById('navbarNav');
    if (navbarNav.classList.contains('show')) {
        navbarNav.classList.remove('show');
    } else {
        navbarNav.classList.add('show');
    }
}



function sendOtp() {
    alert("OTP Sent!");
}

document.getElementById("signup-form").addEventListener("submit", function(event){
    event.preventDefault();
    // Add form submission code here
    alert("Form Submitted!");
});