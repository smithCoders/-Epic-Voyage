import Sidebar from "../../src/components/sidebar/Sidebar";
import styles from "./AppLayout.module.css";
import Map from "../../src/components/Map/Map";

const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      {/* <AppNav /> */}
      <Map />
    </div>
  );
};

export default AppLayout;
