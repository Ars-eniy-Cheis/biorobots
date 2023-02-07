import { observer } from 'mobx-react-lite';


const ClickableIcon = observer((props) => {

    let icons = [];

    for (let i = 0; i < props.iconQuantity; i++) {
        icons.push(
            (<img className='icon' src={props.iconKit[0]}/>)
        )
    }

    return (
        <div className='icon-row'>
            {icons}
        </div>
    );
})

export default ClickableIcon;