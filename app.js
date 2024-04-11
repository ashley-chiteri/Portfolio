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

/*
// email customization
const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});*/


    window.onload = function() {
        // Reset the form fields when the page loads
        document.getElementById("form").reset();
    };