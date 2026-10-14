document.addEventListener("DOMContentLoaded", () => {

  /* 🍪 COOKIE POPUP (only if it exists) */
  const popup = document.getElementById("cookie-popup");
  const overlay = document.getElementById("overlay");

  if (popup && overlay) {
    overlay.style.display = "block";
    popup.style.display = "block";
    
    console.log("cookiemelding")

    setTimeout(() => {
      popup.classList.add("show");
    }, 10);

    const acceptBtn = document.getElementById("cookie-accept");
    const declineBtn = document.getElementById("cookie-decline");

    if (acceptBtn) {
      acceptBtn.addEventListener("click", () => {
         console.log("cookie geaccepteerd")
        popup.classList.remove("show");
        setTimeout(() => {
          popup.style.display = "none";
          overlay.style.display = "none";
        }, 300);
      });
    }

    if (declineBtn) {
      declineBtn.addEventListener("click", () => {
         console.log("cookie geweigerd")
        window.location.href = "https://www.google.com";
      });
    }
  }

  /* 🌙 DARK MODE */
  const button = document.getElementById("theme-toggle");

  // Apply saved theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }

  if (button) {
    button.addEventListener("click", () => {
        console.log("darkmode toggle") 
      document.body.classList.toggle("dark-mode");

      const isDark = document.body.classList.contains("dark-mode");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  }
});

const now = new Date(); // haalt de huidige datum en tijd op
const hours = now.getHours(); // haalt het uur op (0-23)
let greeting = "";
 
if (hours >= 6 && hours < 12) {
    greeting = "Goede morgen!";
}
else if (hours >= 12 && hours < 18) {
    greeting = "Goede middag!";
}
else if (hours >= 18 && hours < 22) {
    greeting = "Goede avond!";
}
else {
    greeting = "Goede nacht!";
}
 
console.log(greeting);
 
// eerst het element pakken
const groetElement = document.getElementById("groet");
 
// daarna de tekst erin zetten
groetElement.textContent = greeting;
 
// fade out na 3 seconden
setTimeout(() => {
  groetElement.classList.add("fade-out");
}, 3000);
 

const eindatum = new Date(2027, 0, 1);

setInterval(function() {
  const nu = new Date();
  const verschil = eindatum - nu;

  const dagen = Math.floor(verschil / (1000 * 60 * 60 *24));
  const uren = Math.floor((verschil % (1000 * 60 * 60 *24))/ (1000 * 60 * 60));
  const minuten = Math.floor((verschil % (1000 * 60 * 60))/ (1000 * 60));
  const seconden = Math.floor((verschil % (1000 * 60)) / 1000);


  document.getElementById("countdown").textContent = dagen + "d " + uren + "u " + minuten + "m " + seconden + "s ";
}, 1000);

