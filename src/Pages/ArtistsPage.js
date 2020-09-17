import React, { useEffect, useState } from "react";

import { fetchArtists } from "../api/artists";

import Spinner from "../../node_modules/react-bootstrap/Spinner";

import { Link } from "react-router-dom";

export default function ArtistPage() {
  const [artistsResponse, setArtistsResponse] = useState(null);

  //Data fetching

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetchArtists();

    setArtistsResponse(response);
  };

  //Loading spinner

  if (!artistsResponse) {
    return <Spinner animation="border" className="loading-spinner" />;
  }

  //

  const artistMap = (artist, idx) => {
    return (
      <div className="artist-link" key={artist.id}>
        <Link to={`/artists/${artist.id}`}>
          <img src={artist.photo} className="artist-avatar"></img>

          <p className="artist-name">{artist.name}</p>
        </Link>
      </div>
    );
  };

  console.log("artistsResponse", artistsResponse);

  //

  return (
    <div className="artist-container">{artistsResponse.map(artistMap)}</div>
  );
}
