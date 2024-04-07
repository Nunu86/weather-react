import React from "react";
import moment from "moment";
import "moment-timezone";
import Moment from "react-moment";

export default function Timezone() {
  let currentDateTime = moment();

  return <Moment format="ddd Mo MMM YYYY, h:mm A">{currentDateTime}</Moment>;
}
