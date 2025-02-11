document.getElementById('consultationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const problem = document.getElementById('problem').value.trim();
    const agree = document.getElementById('agree').checked;


    const phoneRegex = /^[0-9]{10,15}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    let errors = [];

    if (!name) {
        errors.push('Enter your name, please.');
    }
    if (!phone || !phoneRegex.test(phone)) {
        errors.push('Enter your phone number, please.');
    }
    if (!email || !emailRegex.test(email)) {
        errors.push('Enter your email, please.');
    }
    if (!problem) {
        errors.push('Describe your problem, please');
    }
    if (!agree) {
        errors.push('You must agree to the Privacy Policy.');
    }


    if (errors.length > 0) {
        alert(errors.join('\n'));
    } else {
        alert('Thank you! Your application has been successfully submitted.');

        document.getElementById('consultationForm').reset();
    }
});



document.addEventListener("DOMContentLoaded", () => {
    const callLink = document.querySelector('.call a');
    const adviceSection = document.querySelector('.form-container');
    if (callLink && adviceSection) {
        callLink.addEventListener('click', (e) => {
            e.preventDefault();


            adviceSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }
});


if (window.innerWidth <= 474) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "mobile.css";
    document.head.appendChild(link);
}














