import { streamers } from "../../../utils/json";
import { FaTwitch } from "react-icons/fa6";
import img from '../../../assets/personaje-1.png'

function Streamers() {

    return (
        <section className="home-streamers">
            <article className="home-streamers-img">
                <img src={img} alt="windingo-roleplay"/>
            </article>
            <article className="streamers-content">
                <h2>¿Listo para vivir la experiencia de GTA Roleplay con streamers?</h2>
                <div className="streamers-container">
                    {
                        streamers.map((streamer)=>(
                            <a className="streamer-card" key={streamer.id}>
                                <img src={streamer.imgUrl}/>
                                <span><FaTwitch/></span>
                                <div>
                                    <h3>{streamer.nombre}</h3>
                                    <p>{streamer.instagram}</p>
                                </div>
                            </a>
                        ))
                    }
                </div>
            </article>
        </section>
    );
}

export default Streamers;