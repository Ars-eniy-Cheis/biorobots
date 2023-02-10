import '../../../../assets/styles/StandardComponents/Inputs/Buttons/headerButton.scss';
import '../../../../assets/styles/StandardComponents/Inputs/Buttons/marketButton.scss';
import '../../../../assets/styles/StandardComponents/Inputs/Buttons/storageButton.scss';
import '../../../../assets/styles/StandardComponents/Inputs/Buttons/crossButton.scss';
import '../../../../assets/styles/StandardComponents/Inputs/Buttons/gypsyButton.scss';

const Button = (props) => {
    return (
        <div >
            <button onClick={() => {props.onClick()}} className={props.className} disabled={props.disabled ?? false}> {props.title} </button>
        </div >
    );
}

export default Button;