import RadioButton from '../../StandardComponents/Inputs/RadioButton';

const FactoryChooser = (props) => {

    return (
        <div>
            <div className='chooser-title'>{props.title}: </div>
            <div className='chooser-union'>
                <RadioButton
                    chooserId={props.chooserIds[0]}
                    value={props.firstValue}
                    name={props.chooserName}
                    onChange={props.chooserHandler}
                    onChangeValue={true}
                />
                <RadioButton
                    chooserId={props.chooserIds[1]}
                    value={props.secondValue}
                    name={props.chooserName}
                    onChange={props.chooserHandler}
                    onChangeValue={false}
                />
            </div>
        </div>
    );
}

export default FactoryChooser;