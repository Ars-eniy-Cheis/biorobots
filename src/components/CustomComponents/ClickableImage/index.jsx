const ClickableImage = (props) => {

    let image = (
        <img
            alt='icon'
            onClick={() => { props.onClick(props.imageIconHandler, props.imageStateHandler, props.state, props.index) }}
            src={props.src}
            className={props.className}
        />);
    return (
        <div>
            {image}
        </div>
    );
}

export default ClickableImage;