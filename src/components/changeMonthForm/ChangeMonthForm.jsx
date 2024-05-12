import React from "react";
import "./style.css";

export const ChangeMonthForm = ({handleChange, currentMonth}) => {
  return (
    <section className="select-wrapper">
      <label>Canvia de mes</label>
      <select onChange={(e) => handleChange(e)} value={currentMonth}>
        <option value="1">Gener</option>
        <option value="2">Febrer</option>
        <option value="3">Març</option>
        <option value="4">Abril</option>
        <option value="5">Maig</option>
        <option value="6">Juny</option>
        <option value="7">Juliol</option>
        <option value="8">Agost</option>
        <option value="9">Setembre</option>
        <option value="10">Octubre</option>
        <option value="11">Novembre</option>
        <option value="12">Desembre</option>
      </select>
    </section>
  );
};
