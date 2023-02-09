const RadioButton = (props) => {

    return (
        <div className='chooser'>
            <input id={props.chooserId} type="radio" name={props.name} onChange={() => { props.onChange(props.onChangeValue) }} />
            <label className='radio-title' for={props.chooserId}> {props.value} </label>
        </div>

    );
}

export default RadioButton;