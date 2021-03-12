
import { menuItems } from "helpers";
import { Logo, Login } from 'assets/icons';
import styles from "./Header.module.scss";

const Header = () =>
(
    <div className={styles.wrapper}>
        <a href="/">
            <Logo className={styles.logo} />
        </a>
        <nav className={styles.nav}>{
            menuItems && menuItems.map((item) => (<a className={styles.link} key={item} href="/">{item}</a>))
        }</nav>

        <div className={styles.login}><Login className={styles.loginIcon} /> <a className={styles.loginText} href="/">Войти в Интернет-банк</a></div>
    </div>
)

export default Header;