import Accessorie from '../../CustomComponents/Accessorie';

import '../../../assets/styles/Sections/accessorie.scss';

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
            <div className='grid accessories'>
                {accessories}
            </div>
        </div>
    );
}

export default AccessorieRow;