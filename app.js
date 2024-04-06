function scrollToElement(elementSector, instance = 0){
    const elements = document.querySelectorAll(elementSector);

    if (elements.length > instance) {
        elements[instance].scrollIntoView({behavior: 'smooth'});
    }

}

function getInTouch(){
    scrollToElement('.header', 3);
}

const projects = document.getElementById("projects")
const skills = document.getElementById("skills")
const about = document.getElementById("about")
const contacts = document.getElementById("contacts")

projects.addEventListener('click', () =>{
    scrollToElement('.header');
});

skills.addEventListener('click', () =>{
    scrollToElement('.header', 1);
});

about.addEventListener('click', () =>{
    scrollToElement('.header', 2);
});

contacts.addEventListener('click', () =>{
    scrollToElement('.header', 3);
});

/*sending emails
function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ashleychiteri@gmail.com",
        Password : "09FF3C2C3367BB3DED31A3EAE5DE7F7E0B8E",
        To : 'ochamiashley97@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}*/