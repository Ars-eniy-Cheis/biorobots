import Button from '../../StandardComponents/Inputs/Button';
import Image from '../../StandardComponents/Image';

import { declination } from '../../../utils/declination';

const Accessorie = (props) => {

    let image = (<Image alt='' className='accessorie-empty-image' />);
    if (typeof props.picture !== 'object') {
        image = (<Image src={props.picture} alt={props.pictureAlt} className='accessorie-image' />);
    }

    let disabled = false;
    let accessorieQuantity = (<div />);
    if (typeof props.accessorieQuantity !== 'object') {
        accessorieQuantity = (<div className={props.accessorieNameStyle}> {props.accessorieQuantity} шт. </div>)
        if (props.accessorieQuantity === 0) {
            disabled = true;
        }
    }

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