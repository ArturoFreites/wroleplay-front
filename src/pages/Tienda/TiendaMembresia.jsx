import NavegadorTienda from "../../components/NavegadorTienda";
import PortadaTienda from "../../components/PortadaTienda";
import portadaImg from '../../assets/3.png';
import { autosDesc } from '../../utils/informacion';

function TiendaMembresia() {

    const id = 'membresias';

    return (
        <main>
            <PortadaTienda imgUlr={portadaImg} seleccion={id} selecDescripcion={autosDesc} />
            <section className='tienda-contenido'>
                <article className='tienda-navegador-container-autos'>
                    <NavegadorTienda seleccion={id} />
                </article>

                <article className='tienda-articulos'>
                    
                </article>
            </section>
        </main>
    );
}

export default TiendaMembresia;