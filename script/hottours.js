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
      now.toLocaleDateString("en-EN", options) + " " + now.toLocaleTimeString();
  } else {
    console.error('Element with id "datetime" not found');
  }
}

document.addEventListener("DOMContentLoaded", function () {
  showDateTime();
});

function filterToursByPrice(maxPrice) {
  const resultsContainer = document.getElementById("filtered-tours"); // Контейнер для результатов
  // Находим все элементы туров, кроме тех, что внутри карусели
  const allTours = document.querySelectorAll(".tour-item:not(.carousel-item)");

  // Очищаем контейнер с отфильтрованными турами
  resultsContainer.innerHTML = "";

  maxPrice = parseInt(maxPrice, 10);

  allTours.forEach((tour) => {
    let price;
    let title;
    let description;

    // Извлекаем информацию о туре
    if (tour.querySelector(".tour-price")) {
      const priceText = tour.querySelector(".tour-price").innerText;
      price = parseInt(priceText.replace(/[^0-9]/g, ""), 10);
      title = tour.querySelector(".tour-title").innerText;
      description = tour.querySelector(".tour-description")?.innerText || "";
    }

    // Проверяем, подходит ли тур под максимальную цену
    if (price <= maxPrice || isNaN(maxPrice)) {
      // Создаём элемент для отображения информации о туре
      const tourInfo = document.createElement("div");
      tourInfo.className = "filtered-tour";
      tourInfo.innerHTML = `
        <h5 class="tour-title">${title}</h5>
        <p class="tour-description">${description}</p>
        <p class="tour-price"><strong>Price: ${price}tg</strong></p>
        <a href="booking.html" class="btn btn-primary">Book Now</a>
      `;
      resultsContainer.appendChild(tourInfo);
    }
  });
}
