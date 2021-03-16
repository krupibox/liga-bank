import PropTypes from 'prop-types';

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

Button.propTypes = {
    button: PropTypes.shape({
        className: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
    }), 
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
};