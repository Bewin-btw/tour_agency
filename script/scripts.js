
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let errors = [];


    if (!name) {
        errors.push("Name is required.");
    }
    if (!email) {
        errors.push("Email is required.");
    } else if (!validateEmail(email)) {
        errors.push("Please enter a valid email address.");
    }
    if (!message) {
        errors.push("Message is required.");
    }


    if (errors.length > 0) {
        alert(errors.join("\n"));
    } else {
        alert("Thank you! Your message has been sent.");
        this.reset();
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


document.getElementById("changeColorBtn").addEventListener("click", function() {
    document.body.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function updateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById("currentDateTime").innerText = now.toLocaleDateString('en-US', options);
}
setInterval(updateTime, 1000);
updateTime(); // Initial call




