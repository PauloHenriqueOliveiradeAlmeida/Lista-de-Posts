import "./styles.css";

function Button(props) {
    return <button className={`button ${props.className}`} {...props}>{props.value}</button>
}

export default Button;