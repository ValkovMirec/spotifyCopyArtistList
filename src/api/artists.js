import fetch from "node-fetch";

export async function fetchArtists() {
  const response = await fetch(
    "https://5f46c706aaaf9a0016151188.mockapi.io/api/artist"
  );
  const json = await response.json();

  return json;
}
