import axios from "axios";
export class HomePageVM {
  // ================================
  // UI
  // ================================
  uiState: UiState = {
    songCoverURL: null,
    songTitle: null,
    songArtist: null,
  };

  // ================================
  // Functions
  // ================================
  async loadLastHeardSong() {
    axios
      .get(
        "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=lighttigerxiv&api_key=fe1b7799072f646b80fdb37a8ef26d42&format=json&limit=1"
      )
      .then((response) => {
        const recentTrack = response.data.recenttracks.track[0];

        this.uiState.songTitle = recentTrack.name;
        this.uiState.songCoverURL = recentTrack.image[2]["#text"];
        this.uiState.songArtist = recentTrack.artist["#text"];
      })
      .catch((error) => console.error(error));
  }
}

export interface UiState {
  songCoverURL: string | null;
  songTitle: string | null;
  songArtist: string | null;
}
