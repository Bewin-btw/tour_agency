document.addEventListener("DOMContentLoaded", function () {

    // const dateTimeDisplay = document.getElementById("currentDateTime");
    // if (dateTimeDisplay) {
    //   const now = new Date();
    //   dateTimeDisplay.textContent = now.toDateString() + " " + now.toLocaleTimeString();
    // }

    const dateTimeDisplay = document.getElementById("currentDateTime");
    if (dateTimeDisplay) {
        setInterval(function () {
            const now = new Date();
            dateTimeDisplay.textContent = now.toDateString() + " " + now.toLocaleTimeString();
        }, 1000);
    }

    const subscriptionForm = document.getElementById("subscriptionForm");
    if (subscriptionForm) {
        subscriptionForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Thank you for subscribing!");
        });
    }
});