import React from "react";
import { render } from "react-dom";
import randomColor from "randomcolor"

import SVGIcon from "./SVGIcon";

const styles = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  fontFamily: "sans-serif",
  justifyContent: "space-between"
};

const IconIndex = () => {
  <div style={styles}>
    <SVGIcon name="books" width={100} fill={randomColor()} />
    <SVGIcon name="wifi" width={100} fill={randomColor()} />
    <SVGIcon name="trash" width={100} fill={randomColor()} />
    <SVGIcon name="phone" width={100} fill={randomColor()} />
    <SVGIcon name="message" width={100} fill={randomColor()} />
    <SVGIcon name="envelope" width={100} fill={randomColor()} />
  </div>
};

export default IconIndex
