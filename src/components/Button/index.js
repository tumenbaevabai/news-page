
const Button = ({color = "danger", marginLeft = "", onClick, buttonText, type = "submit"}) => {

    return (
        <button type={type} className={`rounded-pill border-0 bg-${color} p-3 ${marginLeft}`} onClick={onClick}>{buttonText}</button>
    )
}

export default Button