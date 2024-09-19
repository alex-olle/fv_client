export const fetchData = async (month, setMonth, setIsLoading) => {
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
