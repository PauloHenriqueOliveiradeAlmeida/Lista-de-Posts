
import P from "prop-types"
import "./styles.css";

function Button({value, onClick, disabled}) {
    return <button className="button" onClick={onClick} disabled={!!disabled}>{value}</button>
}


export default Button;

Button.defaultProps = {
	disabled: false,
	className: ""
}

Button.propTypes = {
	onClick: P.func.isRequired,
	value: P.string.isRequired,
	disabled: P.bool
};
