import { Link } from "react-router-dom";
import { eventos } from "../../../utils/json";

function Eventos() {
    return ( 
        <section className="home-eventos">
            <h1>Eventos</h1>
            <article>
            {
                eventos.map((evento) => (
                    <div className="card-evento" key={evento.id} style={{ backgroundImage: `url(${evento.imgUrl})` }}>
                        <p>{evento.nombre}</p>
                    </div>
                ))
            }
            </article>
            <Link to={"/eventos"} className="button btn-padding">
                Ver más
            </Link>
        </section>
    );
}

export default Eventos;
