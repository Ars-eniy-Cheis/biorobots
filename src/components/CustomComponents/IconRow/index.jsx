import { useEffect } from 'react';

import ClickableImage from '../../CustomComponents/ClickableImage';

import '../../../assets/styles/iconRow.scss';

const IconRow = (props) => {

    useEffect(() => {
        for (let i = 0; i < props.iconQuantity; i++) {
            if (i < props.partQuantity) {
                props.detailIconRowStore.addDetailIconImage(props.iconKit[0]);
                props.detailIconRowStore.addDetailIconState(false);
            }
            else {
                props.detailIconRowStore.addDetailIconImage(props.iconKit[2]);
                props.detailIconRowStore.addDetailIconState(undefined);
            }
            if (props.partQuantity === 0) {
                props.detailIconRowStore.addDetailIconImage(props.iconKit[2]);
                props.detailIconRowStore.addDetailIconState(undefined);
            }
        }
    }, [props.detailIconRowStore.detailIconState]);

    const onClickImageHandler = (detailIconImageHandler, detailIconStateHandler, value, index) => {
        if (typeof value !== 'undefined') {
            if (!value) {
                detailIconImageHandler(index, props.iconKit[1]);
            }
            else {
                detailIconImageHandler(index, props.iconKit[0]);
            }
            detailIconStateHandler(index, !value);
        }
    }

    let icons = [];

    for (let i = 0; i < props.iconQuantity; i++) {
        icons.push(
            <ClickableImage
                imageIconHandler={props.detailIconRowStore.setDetailIconImage}
                imageStateHandler={props.detailIconRowStore.setDetailIconState}
                onClick={onClickImageHandler}
                state={props.detailIconRowStore.detailIconState[i]}
                src={props.detailIconRowStore.detailIconImage[i]}
                index={i}
                className='icon'
            />)
    }

    return (
        <div className='icon-row'>
            {icons}
        </div>
    );
}

export default IconRow;