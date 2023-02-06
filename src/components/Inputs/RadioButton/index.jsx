import { observer } from 'mobx-react-lite';

const RadioButton = observer((props) => {

    return (
        <label className='chooser-label'>
            <input id={props.chooserId} className='chooser-radio-button' type="radio" value={props.value} name={props.name} onChange={() => {props.onChange(props.onChangeValue)}} />
            <span>{props.value}</span>
        </label>
    );
})

export default RadioButton;