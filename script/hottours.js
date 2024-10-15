function changeBackgroundColor() {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
}

function showDateTime() {
  console.log("Displaying date and time");
  const dateTimeElement = document.getElementById("datetime");
  if (dateTimeElement) {
    const now = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    dateTimeElement.textContent =
      now.toLocaleDateString("ru-RU", options) + " " + now.toLocaleTimeString();
  } else {
    console.error('Element with id "datetime" not found');
  }
}

document.addEventListener("DOMContentLoaded", function () {
  showDateTime();
});
