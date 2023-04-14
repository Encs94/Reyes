import { useState } from 'react';

const CardRey = ({ nombre, vacas, img }) => {

    const [cont, setCont] = useState(0)
    const handleClick = () => {
        setCont(cont + 1)
    }

    return <div className="">
        <h3>{nombre}</h3>
        <p>Come {vacas} vacas al dia</p>
        <img src={img} alt="alt"/>
        <span>{cont}</span>
        <button onClick={handleClick}>Añadir</button>
    </div>
}

export default CardRey