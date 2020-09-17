import React, { useEffect, useState } from "react";

import fetchAlbumDetail from "../api/albumDetail";

import Spinner from "../../node_modules/react-bootstrap/Spinner";
import Button from "../../node_modules/react-bootstrap/Button";

export default function AlbumDetail({ match }) {
  const [albumDetailResponse, setAlbumDetailResponse] = useState(null);

  //Data fetching

  useEffect(() => {
    fetchAlbumDetailData();
  }, []);

  console.log("albumDetailResponse", albumDetailResponse);

  const fetchAlbumDetailData = async () => {
    console.log("album detail albumID fetch album", match.params.albumId);

    const response = await fetchAlbumDetail(
      match.params.artistId,
      match.params.albumId
    );

    console.log("albumdetails response ", response);

    setAlbumDetailResponse(response);
  };

  console.log("albumDetailResponse  json before return", albumDetailResponse);

  //Loading spinner

  if (!albumDetailResponse) {
    return <Spinner animation="border" className="loading-spinner" />;
  }

  //

  return (
    <div className="album-detail-container">
      <img
        className="album-detail-cover"
        src={albumDetailResponse.cover_image}
      ></img>

      <h3 className="album-detail-title">{albumDetailResponse.title} </h3>

      <h4>About:</h4>

      <p className="album-detail-about">
        In et velit qui sunt tenetur maiores molestiae dolor sunt. Ad reiciendis
        aut labore quod. Est voluptatem dolores aut nam.Eos deleniti et repellat
        ipsum numquam commodi voluptatem nisi vel. Ut aut id excepturi
        reiciendis a alias quo sit sequi. In veniam dolor ea nemo. Id aliquid
        eos.
      </p>

      <Button variant="light" href={"/"}>
        Return
      </Button>
    </div>
  );
}
