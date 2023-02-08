import Button from '../Inputs/Button';

import { declination } from '../../utils/declination';

const Accessorie = (props) => {

    let image = (<img alt='' className='accessorie-empty-image' />);
    if (typeof props.picture !== 'object') {
        image = (<img src={props.picture} alt={props.pictureAlt} className='accessorie-image' />);
    }

    let accessorieQuantity = (<div />);
    if (typeof props.accessorieQuantity !== 'object') {
        accessorieQuantity = (<div className={props.accessorieNameStyle}> {props.accessorieQuantity} шт. </div>)
        if (props.accessorieQuantity === 0) {
            disabled = true;
        }
    }

    let disabled = false;

    return (
        <div className='accessorie'>
            {image}
            <div className={props.accessorieNameStyle}>
                {props.name}
            </div>
            <div className={props.accessoriePriceStyle}>
                Стоимость: {props.price} {declination(props.price, ['монета', 'монеты', 'монет'])}
            </div>
            {accessorieQuantity}
            <Button
                disabled={disabled}
                className={props.buttonStyle}
                onClick={() => props.buttonHandler[0](props.price, props.accessorieQuantity, props.buttonHandler[1])}
                title={props.buttonActionName}
            />
        </div>
    );
}

export default Accessorie;