import '../../../assets/styles/HeaderButton.scss'

function Button(props) {

    
    return (
        <div >
            <button onClick={() => {props.onClick()}} className={props.className} disabled={props.disabled ?? false}> {props.title} </button>
        </div >
    );
}

export default Button;