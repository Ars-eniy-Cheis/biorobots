import '../../../../assets/styles/HeaderButton.scss'
import '../../../../assets/styles/MarketButton.scss';
import '../../../../assets/styles/StorageButton.scss';
import '../../../../assets/styles/crossButton.scss';

const Button = (props) => {
    return (
        <div >
            <button onClick={() => {props.onClick()}} className={props.className} disabled={props.disabled ?? false}> {props.title} </button>
        </div >
    );
}

export default Button;