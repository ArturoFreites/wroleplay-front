import {trabajos} from '../../../utils/json'
import { IoIosArrowDropupCircle } from "react-icons/io";

function Trabajos() {
    return (
        <section className="home-trabajos">
            <article className="home-trabajo-titulos">
                <div className='home-trabajo-div-titulos'>
                    <p>Gran variedad de actividades</p>
                    <span>
                        <h3>Trabaja y</h3>
                        <h3 className='home-trabajo-titulo'>diviértete</h3>
                    </span>
                </div>
                <div className='home-div-carrousel-icons'>
                    <div>
                        <span>{"<   >"}</span>
                    </div>
                </div>
            </article>
            <article className="home-trabajo-container">
                {
                    trabajos.map((trabajo)=>(
                        <div className='trabajo-card' key={trabajo.id} style={{ backgroundImage: `url(${trabajo.imgUrl})` }}>
                            <div className='trabajo-arriba'>
                                <span>{trabajo.boost&&(<div className='boosteado'><IoIosArrowDropupCircle/><p>Boost SEM</p></div>)}</span>
                                <span className='trabajo-etiqueta'><p>{trabajo.nombre}</p></span>
                            </div>
                            <div className='trabajo-card-titles'>
                                <span><p>Trabaja de</p><p className='trabajo-title-destacado'>{trabajo.nombre}</p></span>
                                <p>{`Nivel Mínimo Requerido: ${trabajo.nivel}`}</p>
                            </div>
                        </div>
                    ))
                }
            </article>
        </section>
    );
}

export default Trabajos;