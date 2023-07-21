import { Link } from "react-router-dom";
import styles from "../HomePage/Homepage.module.css";
import PageNav from "../../src/components/pageNav/PageNav";
export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          You travel the world.
          <br />
          Epic Voyage keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link to="app" className="cta">
          start Exploring Now
        </Link>
      </section>
    </main>
  );
}
