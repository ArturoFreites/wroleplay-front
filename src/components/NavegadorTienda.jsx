import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NavegadorTienda({seleccion}) {

    const [option,setOption] = useState(0);

    const validarSeleccion =() =>{
        if(seleccion =="autos"){
            setOption(1)
        }else if(seleccion=="autos-unicos"){
            setOption(2)
        }else if(seleccion=="membresias"){
            setOption(3)
        }else if(seleccion=="comercio"){
            setOption(4)
        }else if(seleccion=="adicionales"){
            setOption(5)
        }else{
            setOption(6)
        }
    }

    useEffect(()=>{
        validarSeleccion()
    },[])

    return (
        <article className="tienda-navegador">
            <Link to={"/tienda/autos"}><p className={option===1 ? "seleccionado" : "" + "link-tienda"}>AUTOS</p></Link>
            <p>/</p>
            <Link to={"/tienda/autos-unicos"}><p className={option===2 ? "seleccionado" : "" + "link-tienda"}>AUTOS ÚNICOS</p></Link>
            <p>/</p>
            <Link to={"/tienda/membresias"}><p className={option===3 ? "seleccionado" : "" + "link-tienda"}>MEMBRESIA VIP</p></Link>
            <p>/</p>
            <Link to={"/tienda/comercio"}><p className={option==4 ? "seleccionado" : "" + "link-tienda"}>COMERCIO</p></Link>
            <p>/</p>
            <Link to={"/tienda/adicionales"}><p className={option==5 ? "seleccionado" : "" + "link-tienda"}>ADICIONALES</p></Link>
            <p>/</p>
            <Link to={"/tienda/organizaciones"}><p  className={option==6 ? "seleccionado" : "" + "link-tienda"}>ORGANIZACIONES</p></Link>
        </article>
    );
}

export default NavegadorTienda;