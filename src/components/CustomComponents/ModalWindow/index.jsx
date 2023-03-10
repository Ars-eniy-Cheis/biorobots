import React from 'react';

import Button from '../../StandardComponents/Inputs/Button';

import '../../../assets/styles/CustomComponents/ModalWindows/modalWindow.scss';
import '../../../assets/styles/CustomComponents/ModalWindows/walletModalWindow.scss';
import '../../../assets/styles/CustomComponents/ModalWindows/factoryModalWindow.scss';

const ModalWindow = (props) => {
    return (
        <div className={props.active ? 'modal-window modal-window-active' : 'modal-window'} onClick={() => props.setActive(false)}>
            <div className='modal-window-content' onClick={e => e.stopPropagation()}>
                <Button
                    title={'\u00D7'}
                    onClick={() => { props.setActive(false) }}
                    className='text transparent-button cross-button'
                />
                <div className='modal-window-wrap-content'>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default ModalWindow