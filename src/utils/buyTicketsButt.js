import React from "react";

import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

export default function BuyTickets() {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">You can buy</Popover.Title>

      <Popover.Content>
        On this <a href="https://www.ticketportal.sk/">link</a>
      </Popover.Content>
    </Popover>
  );

  const BuyTickets = () => (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <Button variant="success">Buy tickets!</Button>
    </OverlayTrigger>
  );

  return <BuyTickets />;
}
