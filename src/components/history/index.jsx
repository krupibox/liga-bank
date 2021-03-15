import { Button } from "components/ui/button";
import { Arrow } from "assets/icons";
import styles from "./History.module.scss";

const History = ({ setHistory, history }) => {

    const handlerClick = () => setHistory([])

    return (
        <section className={styles.tableContainer}>
            <h2 className={styles.title}>История конвертации</h2>
            <ul className={styles.table}>
                {history && history.map((item, index) => <li
                    key={`${index}-${new Date().getTime()}`}

                ><span className={styles.date} >{item.date}</span> {item.amountFrom} <Arrow className={styles.arrow} /> {item.amountTo}</li>)}
            </ul>
            <Button button={{
                className: styles.button,
                type: "button"
            }} title="Очистить историю" onClick={handlerClick} />

        </section>
    )
}

export default History;
