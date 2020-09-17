import React, { useEffect, useState } from "react";

import { fetchArtist } from "../api/artist";
import { fetchAlbums } from "../api/albums";

import { Redirect, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { format, eachDayOfInterval } from "date-fns";

import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import { season } from "../utils/season";
import BuyTickets from "../utils/buyTicketsButt";

export default function ArtistProfile({ match }) {
  const [artistResponse, setArtistResponse] = useState(null);

  const [albumsResponse, setAlbumsResponse] = useState();

  const [error, setError] = useState(false);

  console.log("match", match.params.artistId);
  console.log("one artist response", artistResponse);

  useEffect(() => {
    fetchProfileData();
    fetchAlbumsData();
  }, []);

  //Data fetching

  const fetchProfileData = async () => {
    if (isNaN(match.params.artistId)) {
      setError(true);

      return;
    }

    const response = await fetchArtist(match.params.artistId);

    console.log("fetchProfileArtistId", match.params.artistId);

    setArtistResponse(response);
  };

  //

  const fetchAlbumsData = async () => {
    const response = await fetchAlbums(match.params.artistId);

    console.log("fetchAlbumsResponse", response);

    setAlbumsResponse(response);
  };

  //Album/Artist info fns

  const daysFromRelease = (a) => {
    let intervalArray = eachDayOfInterval({
      start: new Date(a),

      end: new Date(),
    });

    return intervalArray.length;
  };

  const isArtistVerified = () => {
    if (artistResponse.verified) {
      return <FontAwesomeIcon icon={faCheckDouble} />;
    } else {
      return <FontAwesomeIcon icon={faTimes} />;
    }
  };

  //

  const albumsMap = (album, idx) => {
    return (
      <div key={album.id} className="albums-map">
        <Link
          className="album"
          to={`/artists/${album.artistId}/albums/${album.id}`}
        >
          <img src={album.cover_image}></img>

          <p>{album.title}</p>

          <p>
            Released: {season(album.release_date)}{" "}
            {format(new Date(album.release_date), "io / MMM / R")} ({" "}
            {daysFromRelease(album.release_date)} )
          </p>
        </Link>
      </div>
    );
  };

  if (error) {
    return <Redirect to="/" />;
  }

  //Loading spinner

  if (!artistResponse) {
    return <Spinner animation="border" className="loading-spinner" />;
  }

  if (!albumsResponse) {
    return <Spinner animation="border" className="loading-spinner" />;
  }

  console.log("artistResponse", artistResponse);
  console.log("albumsResponse", albumsResponse);

  return (
    <div className="app-container">
      <div className="artist-profile-container">
        <div className="artist-profile-header">
          <img src={artistResponse.photo}></img>

          <h3>
            {artistResponse.name}
            {"     "}
            {isArtistVerified()}
          </h3>
        </div>

        <Accordion defaultActiveKey="1" className="artist-info">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Artist info <label style={{ color: "grey" }}>click here</label>
              </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Cupcake ipsum dolor sit amet carrot cake. Halvah croissant apple
                pie macaroon tiramisu apple pie topping jujubes. Topping icing
                chupa chups chocolate cake donut pastry sugar plum donut. Danish
                fruitcake chocolate bar gingerbread. Apple pie tootsie roll
                fruitcake jelly-o jelly beans. Lollipop brownie marshmallow
                icing dragée cake powder. Donut macaroon lemon drops. Wafer
                icing candy apple pie oat cake. Chocolate candy topping carrot
                cake caramels liquorice icing dessert pudding. Icing cake ice
                cream marzipan tiramisu jelly-o lemon drops candy.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        <div className="albums-container">{albumsResponse.map(albumsMap)}</div>

        <div className="button-container">
          <Button href={`mailto:${artistResponse.email}`}>
            Message to artist
          </Button>

          <BuyTickets />

          <Button variant="light" href={"/"}>
            Return
          </Button>
        </div>
      </div>
    </div>
  );
}
