

 export class GameAPI {
  constructor() {
    this.apiKey = "26dd94717cmsh31b2382c2baa982p1b72e2jsn41a36223e9c5";
    this.apiHost = "free-to-play-games-database.p.rapidapi.com";
    this.baseURL = "https://free-to-play-games-database.p.rapidapi.com/api";
    this.options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": this.apiKey,
        "x-rapidapi-host": this.apiHost,
      },
    };
  }

  async fetchGames(category) {
    const response = await fetch(
      `${this.baseURL}/games?category=${category}`,
      this.options
    );

    return await response.json();
  }

  async fetchGameDetails(id) {
    const response = await fetch(`${this.baseURL}/game?id=${id}`, this.options);
    return await response.json();
  }
}
















