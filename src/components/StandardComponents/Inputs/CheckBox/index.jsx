const CheckBox = (props) => {

    return (
        <div className={props.className}>
            <input type="checkbox" id={props.id} defaultChecked={props.defaultChecked} onChange={() => {props.onChange()}} />
            <label className={props.labelClassName} htmlFor={props.id}> {props.value} </label>
        </div>

    );
}

export default CheckBox;