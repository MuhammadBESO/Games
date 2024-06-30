export class GameUI {
    constructor(api) {
      this.api = api;
      this.myElement = null; 
    }
  
    async displayGames(category) {
      const games = await this.api.fetchGames(category);
      console.log(games);
      let cartoon = "";
  
      games.forEach((game, index) => {
        cartoon += `
              <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="card h-100 p-3 game-card" data-index="${index}" style="background:#272B30;">
                  <img class="w-100" src="${game.thumbnail}" class="card-img-top" alt="..." >
                  <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between">
                      <p class="sss text-white m-0 ">${game.title}</p>
                      <span class="bg-primary badge ">free</span>
                      <p class="ww d-none">${game.id}</p>
                    </div>
                    <p class="text-secondary m-0">${game.short_description}</p>
                  </div>
                  <div class="card-footer d-flex justify-content-between">
                    <span class="badge" style="background:#32383E;">${game.genre}</span>
                    <span class="badge" style="background:#32383E;">${game.platform}</span>
                  </div>
                </div>
              </div>`;
      });
  
      document.querySelector(".hh").innerHTML = cartoon;
      this.myElement = document.querySelectorAll(".ww"); 
    }
  
    async displayGameDetails(index) {
      if (!this.myElement || index >= this.myElement.length) {
        console.error("Invalid index or myElement not defined correctly");
        return;
      }
  
      const gameId = this.myElement[index].textContent;
      const gameDetails = await this.api.fetchGameDetails(gameId);
  
      document.querySelector(".jj").innerHTML = `
            <div class="row">
              <div class="col-5">
                <img class="w-75" src="${gameDetails.thumbnail}" alt="">
              </div>
              <div class="col-7">
                <h3 class="text-white">Title: ${gameDetails.title}</h3>
                <p class="text-white">Category:<span class="bg-primary p-1 text-dark rounded-2 ms-1" style="font-size:12px; font-family: Comfortaa;">${gameDetails.genre}</span></p>
                <p class="text-white">Platform:<span class="bg-primary text-dark p-1 rounded-2 ms-1" style="font-size:12px; font-family: Comfortaa;">${gameDetails.platform}</span></p>
                <p class="text-white">Status:<span class="bg-primary p-1 text-dark rounded-2 ms-1" style="font-size:12px; font-family: Comfortaa;">${gameDetails.status}</span></p>
                <p class="text-white" style="font-size:14px; font-family: Comfortaa;">${gameDetails.description}</p>
                <a class="btn btn-outline-warning" href="${gameDetails.game_url}">Show game</a>
              </div>
            </div>`;
    }
  
    setupEventListeners() {
      document.querySelector(".hh").addEventListener("click", (event) => {
        if (event.target.closest(".game-card")) {
          const card = event.target.closest(".game-card");
          const index = card.getAttribute("data-index");
          this.displayGameDetails(index);
        }
      });
  
      document.getElementById("mm").addEventListener("click", (event) => {
        event.preventDefault();
        document.getElementById("mm").classList.add("d-none");
        document.querySelector(".ll").classList.replace("d-none", "d-block");
        document.querySelector(".navbar").classList.add("d-none");
        document.querySelector(".bg-top").classList.add("d-none");
        document.querySelector(".loading").classList.remove("d-none");
  
        setTimeout(function () {
          document.querySelector(".loading").classList.add("d-none");
        }, 700);
      });
  
      document.getElementById("icon").addEventListener("click", (event) => {
        event.preventDefault();
        document.querySelector(".ll").classList.add("d-none");
        document.getElementById("mm").classList.remove("d-none");
        document.querySelector(".navbar").classList.remove("d-none");
        document.querySelector(".bg-top").classList.remove("d-none");
      });
    }
  }