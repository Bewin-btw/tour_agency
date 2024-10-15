function openModal() {
  document.getElementById("subscriptionModal").style.display = "block";
}

function closeModal() {
  document.getElementById("subscriptionModal").style.display = "none";
}

function subscribe() {
  const email = document.getElementById("emailInput").value;
  if (validateEmail(email)) {
    alert("Спасибо за подписку!");
    closeModal();
  } else {
    alert("Пожалуйста, введите правильный email.");
  }
}

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(String(email).toLowerCase());
}
