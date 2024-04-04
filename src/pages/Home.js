import React, { useState } from "react";

import "./style.css";

import { Header } from "../components/Header/Header";
import { Loading } from "../components/Loading/Loading";
import { Toggle } from "../components/Toggle/Toggle";
import { List } from "../components/List/List";
import { ChangeMonthForm } from "../components/changeMonthForm/ChangeMonthForm";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [month, setMonth] = useState("");
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [shownArr, setShownArr] = useState(null);

  const fetchData = async (month) => {
    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL + "month/" + month
      );

      let data = await response.json();

      setMonth(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  fetchData(currentMonth);

  const { name, fruits, vegetables } = month;

  const handleShownArr = (type) => {
    type === "fruits" ? setShownArr(fruits) : setShownArr(vegetables);
  };

  const handleChange = (e) => {
    setCurrentMonth(e.target.value);
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
            currentMonth={currentMonth}
          />
        </main>
      )}
    </>
  );
};
