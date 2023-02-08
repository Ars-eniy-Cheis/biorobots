import React from "react";

import Button from "../Inputs/Button";

import '../../assets/styles/modalWindow.scss'

const ModalWindow = (props) => {

    return (
        <div className={props.active ? 'modal-window modal-window-active' : 'modal-window'} onClick={() => props.setActive(false)}>
            <div className='modal-window-content' onClick={e => e.stopPropagation()}>
                <Button
                    title={'╳'}
                    onClick={() => {props.setActive(false)}}
                    className='cross-button'
                />
                {props.children}
            </div>
        </div>
    )
}

export default ModalWindow