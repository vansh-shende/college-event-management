
document.addEventListener("DOMContentLoaded", () => {
  loadClubs();
  loadEvents();
});

function loadClubs() {
  fetch("clubs.json")
    .then(res => res.json())
    .then(clubs => {
      const container = document.getElementById("club-list");
      clubs.forEach(club => {
        container.innerHTML += `
          <div class="card club-card">

            <img src="${club.image}" alt="${club.name}" />
            <h3>${club.name}</h3>
            <p>${club.description}</p>
            <p><strong>Contact:</strong> ${club.contact}</p>
          </div>
        `;
      });
    });
}

function loadEvents() {
  fetch("events.json")
    .then(res => res.json())
    .then(events => {
      const container = document.getElementById("event-list");
      events.forEach(event => {
        container.innerHTML += `
          <div class="card event-card">

            <img src="${event.poster}" alt="${event.title}" />
            <h3>${event.title}</h3>
            <p><strong>Club:</strong> ${event.club}</p>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Venue:</strong> ${event.venue}</p>
            <a href="${event.registerLink}" target="_blank">Register</a>
          </div>
        `;
      });
    });
}
document.getElementById("searchInput").addEventListener("input", function () {
  const searchValue = this.value.toLowerCase();

  const clubCards = document.querySelectorAll(".club-card");
  clubCards.forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = title.includes(searchValue) ? "block" : "none";
  });

  const eventCards = document.querySelectorAll(".event-card");
  eventCards.forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = title.includes(searchValue) ? "block" : "none";
  });
});


