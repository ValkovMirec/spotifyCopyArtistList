import fetch from "node-fetch";

export async function fetchArtist(artistId) {
  const response = await fetch(
    `https://5f46c706aaaf9a0016151188.mockapi.io/api/artist/${artistId}`
  );

  const json = await response.json();

  console.log("artistIdFetch", artistId);
  console.log("fetchArtistJson", json);
  return json;
}
