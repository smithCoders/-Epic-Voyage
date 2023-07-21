import styles from "./CityList.module.css";
import Spinner from "../../components/spinner/Spinner";
import CityItem from "../cityItem/CityItem";
import Message from "../Message/Message";
import { UseCity } from "../../Contexts/CityContext";
const CityList = () => {
  const { isLoading, cities } = UseCity();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message
        message={"please add your the city you visited by clicking the button"}
      />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.cityName} city={city} />
      ))}
    </ul>
  );
};

export default CityList;
