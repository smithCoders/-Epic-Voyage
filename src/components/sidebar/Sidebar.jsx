import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Logo from "../Logo/Logo";
import styles from "./Sidebar.module.css";
import AppLayout from "../../../pages/AppLayOut/AppLayout";
import AppNav from "../AppNav/AppNav";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />

      {/* <AppLayout /> */}
      <Footer />
    </div>
  );
};

export default Sidebar;
