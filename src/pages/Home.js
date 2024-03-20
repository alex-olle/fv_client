import React, { useCallback, useEffect, useState } from "react";

import { Header } from "../components/Header/Header";
import { Core } from "../components/Core/Core";
import { getMonthData } from "../helpers/apiCalls";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [month, setMonth] = useState("");
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);

  //   const getData = async () => {
  // };

  const getData = useCallback(async () => {
    await getMonthData(currentMonth, setMonth);
  }, [currentMonth]);

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    getData();
    setIsLoading(false);
  }, [getData]);

  return (
    <>
      <Header />
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <main>
          <h2>Fruites i verdures de temporada del mes de {month.name}</h2>
          <Core />
        </main>
      )}
    </>
  );
};
