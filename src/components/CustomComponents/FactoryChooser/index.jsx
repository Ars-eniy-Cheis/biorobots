import RadioButton from '../../StandardComponents/Inputs/RadioButton';

const FactoryChooser = (props) => {

    return (
        <div>
            <div className={props.titleClassName}>{props.title}: </div>
            <div className='grid chooser-union'>
                <RadioButton
                    chooserId={props.chooserIds[0]}
                    value={props.firstValue}
                    name={props.chooserName}
                    onChange={props.chooserHandler}
                    onChangeValue={true}
                    labelClassName={props.labelClassName}
                    chooserClassName={props.chooserClassName}
                />
                <RadioButton
                    chooserId={props.chooserIds[1]}
                    value={props.secondValue}
                    name={props.chooserName}
                    onChange={props.chooserHandler}
                    onChangeValue={false}
                    labelClassName={props.labelClassName}
                    chooserClassName={props.chooserClassName}
                />
            </div>
        </div>
    );
}

export default FactoryChooser;