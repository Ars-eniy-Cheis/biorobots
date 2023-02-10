import '../../../../assets/styles/StandardComponents/Inputs/RadioButtons/chooserRadioButton.scss';

const RadioButton = (props) => {

    return (
        <div className={props.chooserClassName}>
            <input id={props.chooserId} type="radio" name={props.name} onChange={() => { props.onChange(props.onChangeValue) }} />
            <label className={props.labelClassName} for={props.chooserId}> {props.value} </label>
        </div>

    );
}

export default RadioButton;