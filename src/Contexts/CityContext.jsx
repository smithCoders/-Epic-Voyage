import { createContext, useContext, useEffect, useState } from "react";
const URL = "http://localhost:3000";
const cityContext = createContext();
const CitiestProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState([]);
  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const resp = await fetch(`${URL}/cities`);
        const data = await resp.json();
        setCities(data);
      } catch {
        alert("error while fetching data");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);
  const getCity = (id) => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const resp = await fetch(`${URL}/cities/${id}`);
        const data = await resp.json();
        setCurrentCity(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  };

  return (
    <cityContext.Provider value={{ cities, currentCity, isLoading, getCity }}>
      {children}
    </cityContext.Provider>
  );
};
const UseCity = () => {
  const city = useContext(cityContext);
  if (city === undefined)
    throw new Error("the contet you are trying yto use isnt legal");
  return city;
};
export { CitiestProvider, UseCity };
