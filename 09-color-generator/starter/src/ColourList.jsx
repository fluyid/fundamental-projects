import React from "react";
import SingleColour from "./SingleColour";
import { nanoid } from "nanoid";

const ColourList = ({ colors }) => {
  return (
    <section className="colors">
      {colors.map((color, index) => {
        return <SingleColour key={nanoid()} color={color} index={index} />;
      })}
    </section>
  );
};

export default ColourList;
