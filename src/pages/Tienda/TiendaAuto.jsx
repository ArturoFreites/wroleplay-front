import PortadaTienda from '../../components/PortadaTienda';
import NavegadorTienda from '../../components/NavegadorTienda'
import portadaImg from '../../assets/3.png'
import { autosDesc } from '../../utils/informacion';
import { autos } from '../../utils/json'
import lambo from '../../assets/lambo.jpg'
import { FaMedal } from 'react-icons/fa';

function TiendaAuto() {

    const id = "autos"

    const medals = [
        {
            id: 1,
            nombre: "Oro"
        },
        {
            id: 2,
            nombre: "Plata"
        },
        {
            id: 3,
            nombre: "Bronce"
        }
    ]

    return (
        <main>
            <PortadaTienda imgUlr={portadaImg} seleccion={id} selecDescripcion={autosDesc} />
            <section className='tienda-contenido'>
                <article className='tienda-navegador-container-autos'>
                    <NavegadorTienda seleccion={id} />
                    <div className='tienda-medals'>
                        {
                            medals.map((medal) => (
                                <span key={medal.id}>
                                    <FaMedal className={`medal${medal.id}`} />
                                    <p>{medal.nombre}</p>
                                </span>
                            ))
                        }
                    </div>
                </article>

                <article className='tienda-articulos'>
                    {
                        autos.map((auto) => (
                            <div key={auto.id} className='card-auto' style={{ backgroundImage: `url(${lambo})` }}>
                                <div className='card-auto-seller'>
                                    <div>
                                        <FaMedal className={`medal${auto.nivelArticulo}`} />
                                    </div>
                                    <span>
                                        {auto.seller &&
                                            <>
                                                <h4>TOP</h4>
                                                <p>SELLER</p>
                                            </>
                                        }
                                    </span>
                                </div>
                                <div className='card-auto-description'>
                                    <h2>{auto.nombre}</h2>
                                    <div>
                                        <p>{auto.precioArg}/{auto.precioUsd}USD</p>
                                        <button className='button-tienda'>Agregar al carrito</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </article>
            </section>
        </main>
    );
}

export default TiendaAuto;