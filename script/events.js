const fetchEvents = async (city) => {
  const apiKey = "wy9a5RzGjnempy2HcYHwGGIdGc5a7hN4";
  const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&city=${city}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data._embedded && data._embedded.events) {
      displayEvents(data._embedded.events);
    } else {
      document.getElementById("events-container").innerHTML =
        "<p>No events found for the selected destination.</p>";
    }
  } catch (error) {
    console.error("Error fetching events:", error);
    document.getElementById("events-container").innerHTML =
      "<p>Unable to load events. Please try again later.</p>";
  }
};

const displayEvents = (events) => {
  const container = document.getElementById("events-container");
  container.innerHTML = ""; // Clear the container

  events.slice(0, 6).forEach((event) => {
    const eventCard = document.createElement("div");
    eventCard.className = "col-md-4 mb-4 event-card"; // Add 'event-card' class for easier styling

    eventCard.innerHTML = `
      <div class="card">
        <img src="${event.images[0].url}" class="card-img-top" alt="${event.name}">
        <div class="card-body">
          <h5 class="card-title">${event.name}</h5>
          <p class="card-text">${event.dates.start.localDate}</p>
          <a href="${event.url}" target="_blank" class="btn btn-primary">Learn More</a>
        </div>
      </div>
    `;

    container.appendChild(eventCard);
  });

  // After events are displayed, apply theme-specific styles
  applyThemeStyles();
};

// Function to apply dark/light theme styles dynamically
const applyThemeStyles = () => {
  const isDarkTheme = document.body.classList.contains("dark-theme");

  const eventCards = document.querySelectorAll(".event-card");
  eventCards.forEach((card) => {
    if (isDarkTheme) {
      card.querySelector(".card").style.backgroundColor = "#444"; // Dark background for the card
      card.querySelector(".card").style.color = "#fff"; // Light text color for the card
    } else {
      card.querySelector(".card").style.backgroundColor = "#fff"; // Light background for the card
      card.querySelector(".card").style.color = "#000"; // Dark text color for the card
    }
  });

  const eventsContainer = document.getElementById("events-container");
  if (isDarkTheme) {
    eventsContainer.style.backgroundColor = "#333"; // Dark background for the container
    eventsContainer.style.color = "#fff"; // Light text color for the container
  } else {
    eventsContainer.style.backgroundColor = "#f4f4f4"; // Light background for the container
    eventsContainer.style.color = "#000"; // Dark text color for the container
  }
};

// Handle city form submission
document.getElementById("city-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const city = document.getElementById("city-input").value.trim();

  if (city) {
    fetchEvents(city); // Call the function with the entered city
  } else {
    alert("Please enter a valid city name.");
  }
});

// Load events for a default city (Paris) when the page loads
document.addEventListener("DOMContentLoaded", () => {
  fetchEvents("Paris");
  applyThemeStyles(); // Apply the correct theme when the page loads
});
