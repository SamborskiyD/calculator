import './Button.css';

const Button = ({className, sign, value, onClick}) => {
    return (
        <button className={className} value={value} sign={sign} onClick={onClick}>
            {sign}
        </button>
    );
};

export default Button;