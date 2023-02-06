import { observer } from 'mobx-react-lite';

import biohand from '../../assets/icons/biohand.png';

import Accessorie from '../Accessorie';

import '../../assets/styles/accessorie.scss';

const AccessorieRow = (props) => {

    const accessories = [];
    for (let i = 0; i < props.quantity; i++) {
        accessories.push(
            < Accessorie
                picture={props.pictures[i]}
                pictureAlt={props.picturesAlt[i]}
                accessorieNameStyle={props.accessorieNameStyles[i]}
                accessoriePriceStyle={props.accessoriePriceStyles[i]}
                accessorieQuantity={props.accessoriesQuantity[i]}
                buttonStyle={props.buttonStyles[i]}
                buttonHandler={props.buttonHandlers[i]}
                price={props.accessoriePrices[i]}
                name={props.accessorieNames[i]}
                buttonActionName={props.buttonActionsNames[i]}
            />
        );
    }


    return (
        <div className='market'>
            <h2>
                {props.rowName}
            </h2>
            <div className='accessories'>
                {accessories}
            </div>

        </div>
    );
}

export default AccessorieRow;