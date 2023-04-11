import errorImage from '../images/errorImage.jpg'

export default function PockemonErrorView ({ message }) {

    return (
    <div role="alert">
        <p>{message}</p>
        <img src={errorImage} alt="sadcat" width="300" />
    </div>
    );
};