import { useEffect } from 'react';

import '../../assets/styles/factoryImage.scss';
import { observer } from 'mobx-react-lite';

const ClickableImage = observer((props) => {

    let image = (<img alt='icon' onClick={() => { props.onClick(props.imageIconHandler, props.imageStateHandler, props.state, props.index) }} src={props.src} className={props.className} />);

    return (
        <div>
            {image}
        </div>
    );
})

export default ClickableImage;