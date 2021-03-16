import PropTypes from 'prop-types';
import { Button } from "components/ui/button";
import { Arrow } from "assets/icons";
import styles from "./History.module.scss";

const History = ({ onSetHistory, history }) => {

    const handlerClick = () => onSetHistory([])

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

History.propTypes = {
    history: PropTypes.arrayOf(PropTypes.shape({
        amountFrom: PropTypes.string,
        amountTo: PropTypes.string,
        date: PropTypes.string
    })),
    onSetHistory: PropTypes.func.isRequired
};

export default History;

