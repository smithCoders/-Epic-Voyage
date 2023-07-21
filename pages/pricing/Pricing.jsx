// Uses the same styles as Pricing
import PageNav from "../../src/components/pageNav/PageNav";
import styles from "./pricing.module.css";

export default function Pricing() {
  return (
    <main className={styles.Pricing}>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <img
          src="../../src/assets/img-1.jpg"
          alt="overview of a large city with skyscrapers"
        />
      </section>
    </main>
  );
}
