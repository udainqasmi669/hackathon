// get refrence to the form and display area
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
//Form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); //prevent reloding
    //collect values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experiance = document.getElementById("experiance").value;
    var skills = document.getElementById("skills").value;
    //generate resume dynamicaly
    var resume = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n     <p><b>Email:</b>").concat(email, "</p>\n      <p><b>Phone:</b>").concat(phone, "</p>\n      \n      <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experiance</h3>\n    <p>").concat(experiance, "</p>\n    \n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    \n      ");
    //display resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resume;
    }
    else {
        console.error("The resume display is missing");
    }
});
