import React from "react";

import { ListItem } from "../ListItem/ListItem";

import "./style.css"

export const List = ({ arr }) => {
  return (
    <>
      {arr && (
        <ul>
          {arr.map((element, index) => {
            return <ListItem elem={element} key={index} />;
          })}
        </ul>
      )}
    </>
  );
};
