import { observer } from 'mobx-react-lite';

import '../../assets/styles/factoryImage.scss';

const FactoryImage = observer((props) => {
    let image = (<img src={props.image} alt={props.imageAlt} className='factory-robot-image' />);

    return (
        <div >
            {image}
        </div>
    );
})

export default FactoryImage;