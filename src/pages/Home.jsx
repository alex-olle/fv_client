import React, { useState, useEffect } from "react";

import "./style.css";

import { Header } from "../components/Header/Header";
import { Loading } from "../components/Loading/Loading";
import { Toggle } from "../components/Toggle/Toggle";
import { List } from "../components/List/List";
import { fetchData } from "../services/fetchData";
import { ChangeMonthForm } from "../components/changeMonthForm/ChangeMonthForm";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [month, setMonth] = useState("");
  const [shownArr, setShownArr] = useState(null);

  useEffect(() => {
    const currentDate = new Date().getMonth() + 1;
    fetchData(currentDate, setMonth, setIsLoading);
  }, []);

  const { name, fruits, vegetables } = month;

  const handleShownArr = (type) =>
    type === "fruits" ? setShownArr(fruits) : setShownArr(vegetables);

  const handleChange = (e) => {
    setIsLoading(true);
    fetchData(e.target.value, setMonth, setIsLoading);
  };

  return (
    <>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <main>
          <h2>Fruites i verdures de temporada del mes de {name}</h2>
          <Toggle handleShownArr={handleShownArr} />
          <List arr={shownArr ? shownArr : fruits} />
          <ChangeMonthForm
            handleChange={handleChange}
            currentMonth={month.id}
          />
        </main>
      )}
    </>
  );
};
