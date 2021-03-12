import styles from "./Converter.module.scss";

const Converter = () =>
(
    <div className={styles.container}>
        <h2>Конвертер валют</h2>
        <fieldset >
            <legend>У меня есть:</legend>
            <div>
                <input type="text" name="name" placeholder="1000" size="8" required />
                <select>
                    <option value="grapefruit">USD</option>
                    <option value="lime">RUB</option>
                    <option selected value="coconut">CHF</option>
                    <option value="mango">EUR</option>
                </select>
            </div>
        </fieldset>
    </div>
)

export default Converter;