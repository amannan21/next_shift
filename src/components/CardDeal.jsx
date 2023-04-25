import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
         We still process film
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      All color film processing and printing in less than 30 minutes. We can print your images up to 11x14 in less than 10 minutes.


      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
