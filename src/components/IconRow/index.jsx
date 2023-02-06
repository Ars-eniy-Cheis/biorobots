import { observer } from 'mobx-react-lite';

import ClickableImage from '../ClickableImage';

import declination from '../../utils/declination'

import '../../assets/styles/iconRow.scss'
import { useEffect, useRef } from 'react';

const IconRow = observer((props) => {

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
        console.log(value);
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
        if (props.detailIconRowStore.detailIconState[i] && typeof props.detailIconRowStore.detailIconState[i] !== 'undefined') {
            icons.push(<ClickableImage
                imageIconHandler={props.detailIconRowStore.setDetailIconImage}
                imageStateHandler={props.detailIconRowStore.setDetailIconState}
                onClick={onClickImageHandler}
                state={props.detailIconRowStore.detailIconState[i]}
                src={props.detailIconRowStore.detailIconImage[i]}
                index={i}
                className='icon'
            />)
        }
        else if (props.detailIconRowStore.detailIconState[i] !== 'undefined') {
            icons.push(<ClickableImage
                imageIconHandler={props.detailIconRowStore.setDetailIconImage}
                imageStateHandler={props.detailIconRowStore.setDetailIconState}
                onClick={onClickImageHandler}
                state={props.detailIconRowStore.detailIconState[i]}
                src={props.detailIconRowStore.detailIconImage[i]}
                index={i}
                className='icon'
            />)
        }
        else {
            icons.push(<ClickableImage
                imageIconHandler={props.detailIconRowStore.setDetailIconImage}
                imageStateHandler={props.detailIconRowStore.setDetailIconState}
                onClick={onClickImageHandler}
                state={props.detailIconRowStore.detailIconState[i]}
                src={props.detailIconRowStore.detailIconImage[i]}
                index={i}
                className='icon'
            />)
        }
    }

    return (
        <div className='icon-row'>
            {icons}
        </div>
    );
})

export default IconRow;