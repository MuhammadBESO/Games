
import { GameAPI} from "./uimodule.js";
import { GameUI } from "./gamesmodule.js";
const api = new GameAPI();
const ui = new GameUI(api);

ui.displayGames("mmorpg");
ui.setupEventListeners();
document.getElementById("shooter").addEventListener("click", function () {

    ui.displayGames("shooter");

    document.querySelector(".loading").classList.remove("d-none")

    setTimeout(function () {
        document.querySelector(".loading").classList.add("d-none")
    }, 500);
}
);

document.getElementById("mmorpg").addEventListener("click", function () {
    ui.displayGames("mmorpg");
    document.querySelector(".loading").classList.remove("d-none")

    setTimeout(function () {
        document.querySelector(".loading").classList.add("d-none")
    }, 500);
});
document.getElementById("sailing").addEventListener("click", function () {
    ui.displayGames("sailing");
    document.querySelector(".loading").classList.remove("d-none")

    setTimeout(function () {
        document.querySelector(".loading").classList.add("d-none")
    }, 500);
});
document.getElementById("permadeath").addEventListener("click", function () {
    ui.displayGames("permadeath");
    document.querySelector(".loading").classList.remove("d-none")

    setTimeout(function () {
        document.querySelector(".loading").classList.add("d-none")
    }, 500);
});
document.getElementById("superhero").addEventListener("click", function () {
    ui.displayGames("superhero");
    document.querySelector(".loading").classList.remove("d-none")

    setTimeout(function () {
        document.querySelector(".loading").classList.add("d-none")
    }, 500);
});
document.getElementById("pixel").addEventListener("click", function () {
    ui.displayGames("pixel");
    document.querySelector(".loading").classList.remove("d-none")

    setTimeout(function () {
        document.querySelector(".loading").classList.add("d-none")
    }, 500);
});

document.addEventListener("DOMContentLoaded", function () {
    // Get all the navigation links
    const navLinks = document.querySelectorAll(".nav-link");

    // Add click event listener to each link
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            // Prevent default behavior (e.g., following the href="#")
            event.preventDefault();

            // Remove active class from all links
            navLinks.forEach(function (link) {
                link.classList.remove("active");
            });

            // Add active class to the clicked link
            this.classList.add("active");
        });
    });
});
console.log(ui);
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector(".loading").classList.remove("d-none")

    setTimeout(function () {
        document.querySelector(".loading").classList.add("d-none")
    }, 500);
});


