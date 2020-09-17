import fetch from "node-fetch";

export async function fetchAlbums(artistId) {
  const response = await fetch(
    `https://5f46c706aaaf9a0016151188.mockapi.io/api/artist/${artistId}/albums`
  );
  const json = await response.json();

  console.log("albums artist ID", artistId);
  console.log("albums response", response);
  console.log("albums json", json);

  return json;
}
