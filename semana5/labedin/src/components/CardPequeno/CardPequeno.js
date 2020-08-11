import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="bigcard-container">
            <img src={ props.imagem } />
            <div>
                <p>{ props.descricao }</p>
                <p>{ props.end}</p>
            </div>
        </div>
    )
}

export default CardPequeno;