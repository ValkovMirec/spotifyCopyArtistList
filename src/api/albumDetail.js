import fetch from "node-fetch";

export default async function fetchAlbumDetail(artistId, albumId) {
  const response = await fetch(
    `https://5f46c706aaaf9a0016151188.mockapi.io/api/artist/${artistId}/albums/${albumId}`
  );
  const json = await response.json();

  console.log("albums detail albums json", json);

  return json;
}
