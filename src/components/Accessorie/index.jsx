import { observer } from 'mobx-react-lite';

import { declination } from '../../utils/declination';

import biohand from '../../assets/icons/biohand.png';

import '../../assets/styles/MarketButton.scss';
import '../../assets/styles/StorageButton.scss';

const Accessorie = (props) => {
    let image = (<img alt='' className='accessorie-empty-image' />);

    if (typeof props.picture !== 'object') {
        image = (<img src={props.picture} alt={props.pictureAlt} className='accessorie-image' />);
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
            <button disabled={disabled} className={props.buttonStyle} onClick={() => props.buttonHandler[0](props.price, props.accessorieQuantity, props.buttonHandler[1])}>{props.buttonActionName}</button>
        </div>
    );
}

export default Accessorie;