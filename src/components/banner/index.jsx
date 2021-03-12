import cards from "assets/img/cards.webp";
import styles from "./Banner.module.scss";

const Banner = () =>
(
    <div className={styles.wrapper}>
        <div className={styles.inner}>
            <div className={styles.action}>
                <p className={styles.title}>Лига Банк</p>
                <p className={styles.subTitle}>Кредиты на любой случай</p>
                <button className={styles.button} type="submit">Рассчитать кредит</button>
            </div>
            <picture>
                <img src={cards} height="" weight="" alt="Cards" />
            </picture>
        </div>
    </div>
)

export default Banner;