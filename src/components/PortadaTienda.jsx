function PortadaTienda({imgUlr,seleccion,selecDescripcion}) {
    return (
        <section className="portada-tienda"> 
            <img src={imgUlr} />
            <div>
                <h1>{seleccion}</h1>
                <p>{selecDescripcion}</p>
            </div>
        </section>
    );
}

export default PortadaTienda;