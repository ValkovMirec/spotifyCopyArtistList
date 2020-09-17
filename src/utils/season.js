import React from "react";
import Badge from "react-bootstrap/Badge";

export function season(date) {
  let month = new Date(date).getMonth() + 1;
  if (month === 13 || (month >= 1 && month <= 2)) {
    console.log("month", month);

    return <Badge variant="info">Winter</Badge>;
  } else if (month >= 3 && month <= 5) {
    console.log("month", month);

    return <Badge variant="success">Spring</Badge>;
  } else if (month >= 6 && month <= 8) {
    console.log("month", month);

    return <Badge variant="danger">Summer</Badge>;
  } else if (month >= 9 && month <= 11) {
    console.log("month", month);

    return <Badge variant="warning">Autumn</Badge>;
  }
}
