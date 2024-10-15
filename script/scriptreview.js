
document.getElementById("reviewForm").addEventListener("submit", function(event) {
    event.preventDefault();


    let name = document.getElementById("name").value.trim();
    let review = document.getElementById("review").value.trim();
    let rating = document.getElementById("rating").value;


    if (!name || !review || !rating) {
        alert("Please,fill out all fields.");
    } else {
        alert("Thank you! Your message has been sent.");
        this.reset();
    }
});
