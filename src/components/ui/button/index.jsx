export const Button = ({ button, title, onClick }) => {

    const handleOnClick = button.type === "submit"
        ? null
        : () => {
            if (onClick) {
                onClick();
            }
        };

    return (<button {...button} onClick={handleOnClick}>{title}</button>)
}
