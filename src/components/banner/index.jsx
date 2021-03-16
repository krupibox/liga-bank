import { Button } from "components/ui/button";
import cardsX1 from "assets/img/cards@1x.webp";
import cardsX2 from "assets/img/cards@2x.webp";
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
                <source type="image/webp" srcset={`${cardsX1} 1x, ${cardsX2} 2x`} />
                <img src={cardsX1} weight="398" height="240" alt="Cards" />
            </picture>
        </div>
    </div>
)

export default Banner;