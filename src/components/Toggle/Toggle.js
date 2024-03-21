import React, { useState } from "react";

import "./style.css";

export const Toggle = ({ handleShownArr }) => {
  const [isActive, setIsActive] = useState(true);

  const handleToggle = (type) => {
    if (type === "fruits") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    handleShownArr(type);
  };

  return (
    <section className="toggle-buttons">
      <button
        className={isActive ? "active-toggle" : null}
        onClick={() => handleToggle("fruits")}
      >
        Fruites
      </button>
      <button
        className={isActive ? null : "active-toggle"}
        onClick={() => handleToggle("vegetables")}
      >
        Verdures
      </button>
    </section>
  );
};
