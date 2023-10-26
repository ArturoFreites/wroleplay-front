import logo from '../assets/logo.png';

function Loader() {
    return (
        <div className="loader-container">
            <div className="loader">
                <img src={logo} alt='windingo roleplay' />
            </div>
        </div>
    );
}

export default Loader;