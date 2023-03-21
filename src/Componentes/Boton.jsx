import React from "react";
import '../hojas-estilo/boton.css';

function Boton({ texto, siBoton, gestionarClic, restarClic }){
    return(
        <button
            className = { siBoton ? 'boton-clic' : 'boton-reiniciar' }
            onClick = { gestionarClic || restarClic}>
            { texto }
        </button>
    );
}

export default Boton;