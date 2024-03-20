export const getMonthData = async (number, setMonth) => {
  fetch(process.env.REACT_APP_API_URL + "month/" + number)
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      setMonth(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
