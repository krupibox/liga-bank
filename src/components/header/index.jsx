
import { menuItems } from "../../helpers";
import { ReactComponent as Logo } from '../../assets/logo.svg';
import styles from "./Header.module.scss";

const Header = () =>
(
    <div className={styles.navigationWrapper}>
        <Logo />
        <nav className={styles.menuInner}>{
            menuItems && menuItems.map((item) => (<a className={styles.menuLink} key={item} href="/">{item}</a>))
        }</nav>

        <div>Войти в Интернет-банк</div>
    </div>
)

export default Header;