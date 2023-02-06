import { observer } from 'mobx-react-lite';

import ClickableImage from '../ClickableImage';

import DetailIconStore from '../../store/DetailIconStore';

import declination from '../../utils/declination'

import '../../assets/styles/iconRow.scss'
import { useEffect, useRef } from 'react';

const IconRow = observer((props) => {

    const didMount = useRef(false);

    useEffect(() => {
        if (!didMount.current) {

        }

    }, []);

    const onClickImageHandler = (detailIconImageHandler, detailIconStateHandler, value) => {
        if (typeof value !== 'undefined') {
            console.log(value);
            detailIconImageHandler(props.iconKit[1]);
            detailIconStateHandler(!value);
        }
    }

    let icons = [];

    let detailIconsStore = [];

    for (let i = 0; i < props.iconQuantity; i++) {
        if (i < props.partQuantity) {
            detailIconsStore.push(new DetailIconStore())
            detailIconsStore[i].setDetailIconImage(props.iconKit[0]);
            detailIconsStore[i].setdetailIconState(false);
        }
        else {
            detailIconsStore.push(new DetailIconStore())
            detailIconsStore[i].setDetailIconImage(props.iconKit[2]);
            detailIconsStore[i].setdetailIconState(undefined);
        }
    }

    for (let i = 0; i < props.iconQuantity; i++) {
        if (detailIconsStore[i].detailIconState && typeof detailIconsStore[i].detailIconState !== 'undefined') {
            icons.push(<ClickableImage imageIconHandler={detailIconsStore[i].setDetailIconImage} imageStateHandler={detailIconsStore[i].setdetailIconState} onClick={onClickImageHandler} state={detailIconsStore[i].detailIconState} src={detailIconsStore[i].detailIconImage} id={'true' + i} className='icon' />)
        }
        else if (detailIconsStore[i].detailIconState !== 'undefined') {
            icons.push(<ClickableImage imageIconHandler={detailIconsStore[i].setDetailIconImage} imageStateHandler={detailIconsStore[i].setdetailIconState} onClick={onClickImageHandler} state={detailIconsStore[i].detailIconState} src={detailIconsStore[i].detailIconImage} id={'false' + i} className='icon' />)
        }
        else {
            icons.push(<ClickableImage imageIconHandler={detailIconsStore[i].setDetailIconImage} imageStateHandler={detailIconsStore[i].setdetailIconState} onClick={onClickImageHandler} state={detailIconsStore[i].detailIconState} src={detailIconsStore[i].detailIconImage} id={'undefine' + i} className='icon' />)
        }
    }



    return (
        <div className='icon-row'>
            {icons}
        </div>
    );
})

export default IconRow;