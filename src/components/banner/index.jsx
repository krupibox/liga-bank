import { Button } from "components/ui/button";
import cards from "assets/img/cards.webp";
import styles from "./Banner.module.scss";

const Banner = () => (
    <div className={styles.container}>
        <div className={styles.inner}>
            <div className={styles.action}>
                <h1 className={styles.title}>Лига Банк</h1>
                <p className={styles.subTitle}>Кредиты на любой случай</p>
                <Button button={{
                    className: styles.button,
                    type: "button"
                }} title="Рассчитать кредит" />
            </div>
            <picture>
                <img src={cards} height="" weight="" alt="Cards" />
            </picture>
        </div>
    </div>
)

export default Banner;