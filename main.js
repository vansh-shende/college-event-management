
document.addEventListener("DOMContentLoaded", () => {
  loadClubs();
  loadEvents();
});

function loadClubs() {
  // Yaha apna data directly likh do

const clubs = [
  { name: "Coding Club", desc: "Learn programming and build projects" },
  { name: "Robotics Club", desc: "Make robots and circuits" }
];

const events = [
  { title: "Hackathon 2025", date: "12 Sept 2025", desc: "24-hour coding event" },
  { title: "Robotics Workshop", date: "20 Sept 2025", desc: "Hands-on robot building" }
];

// Ab yeh data HTML me show karenge

document.addEventListener("DOMContentLoaded", () => {
  let clubsDiv = document.getElementById("clubs-container");
  clubs.forEach(c => {
    clubsDiv.innerHTML += `<h3>${c.name}</h3><p>${c.desc}</p><hr>`;
  });

  let eventsDiv = document.getElementById("events-container");
  events.forEach(e => {
    eventsDiv.innerHTML += `<h4>${e.title}</h4><p>${e.date}</p><p>${e.desc}</p><hr>`;
  });
});
