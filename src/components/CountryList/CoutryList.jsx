import styles from "./CountryList.module.css";
import Spinner from "../spinner/Spinner";
import CountryItem from "../CountryItem/CountryItem";
import { UseCity } from "../../Contexts/CityContext";
const CoutryList = () => {
  const { isLoading, cities } = UseCity();
  if (isLoading) return <Spinner />;
  const countries = cities.reduce((arr, city) => {
    // filter out all the  duplicated city and ite the country name
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { county: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country, index) => (
        <CountryItem key={index} country={country} />
      ))}
    </ul>
  );
};

export default CoutryList;
