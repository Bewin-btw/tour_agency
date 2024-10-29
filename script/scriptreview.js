let lowRatingAudio;
document.getElementById("reviewForm").addEventListener("submit", function(event) {
    event.preventDefault();

    if (lowRatingAudio) {
        lowRatingAudio.pause();
        lowRatingAudio.currentTime = 0;  // Сбрасываем звук в начало
    }

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
document.getElementById("rating").addEventListener("change", function() {
    if (this.value === "1") {
        playLowRatingSound();
    }
});

function playLowRatingSound() {
    const audio = new Audio('source/sadmeoww.mp3');  // Adjust the path if needed
    audio.play();
}