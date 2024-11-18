const fetchEvents = async (city) => {
    const apiKey = 'wy9a5RzGjnempy2HcYHwGGIdGc5a7hN4'; 
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&city=${city}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data._embedded && data._embedded.events) {
        displayEvents(data._embedded.events);
      } else {
        document.getElementById('events-container').innerHTML =
          '<p>No events found for the selected destination.</p>';
      }
    } catch (error) {
      console.error('Error fetching events:', error);
      document.getElementById('events-container').innerHTML =
        '<p>Unable to load events. Please try again later.</p>';
    }
  };
  
  const displayEvents = (events) => {
    const container = document.getElementById('events-container');
    container.innerHTML = ''; // Очищаем контейнер
  
    events.slice(0, 6).forEach((event) => {
      const eventCard = document.createElement('div');
      eventCard.className = 'col-md-4 mb-4';
  
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
  };
  
  // Обработка формы ввода города
  document.getElementById('city-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const city = document.getElementById('city-input').value.trim();
    
    if (city) {
      fetchEvents(city); // Вызываем функцию с введённым городом
    } else {
      alert('Please enter a valid city name.');
    }
  });
  
  // Загрузка событий для города по умолчанию при загрузке страницы
  document.addEventListener('DOMContentLoaded', () => fetchEvents('Paris'));
  