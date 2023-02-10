import '../../../assets/styles/StandardComponents/Images/factoryImage.scss';
import '../../../assets/styles/StandardComponents/Images/logoImage.scss';
import '../../../assets/styles/StandardComponents/Images/pacManImage.scss';
import '../../../assets/styles/StandardComponents/Images/accessorieImage.scss';

const Image = (props) => {

    return (
        <div >
            <img
                src={props.src}
                alt={props.alt}
                className={props.className}
            />
        </div>
    );
}

export default Image;