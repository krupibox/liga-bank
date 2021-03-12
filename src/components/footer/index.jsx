
import { menuItems, footerSocialItems, removeItem } from "../../helpers";
import { Logo } from '../../assets/icons';
import styles from "./Footer.module.scss";

const ITEM = 2;

const Header = () =>
(
    <div className={styles.wrapper}>
        <div className={[styles.col, styles.logoInner].join(" ")}>
            <a href="/"><Logo className={styles.logoIcon} /></a>
            <p className={styles.address}>150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка России №1050 Ⓒ Лига Банк, 2019</p>
        </div>
        <ul className={[styles.col, styles.menuList].join(" ")}>
            {removeItem(menuItems, ITEM).map(item => <li key={item}><a href="/">{item}</a></li>)}
        </ul>
        <div className={styles.col}>
            <div className={styles.mobile}><span className={styles.accent}>*0904</span>
            Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2
            </div>
        </div>
        <div className={styles.col}>
            <div className={styles.handset}><span className={styles.accent}>8 800 111 22 33</span>
            Бесплатный для всех городов России
            </div>
        </div>
        <div className={[styles.col, styles.social].join(" ")}>
            <ul className={styles.socialList}>
                {
                    footerSocialItems.map((item => <li key={item.name}>
                        <a href={item.href} target="_blank" rel="noopener noreferrer"><item.icon title={item.name} className={styles.icon} />
                        </a>
                    </li>))
                }
            </ul>
        </div>
    </div>
)

export default Header;