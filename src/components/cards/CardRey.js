
const CardRey = ({ nombre, vacas, img, onClick }) => {

    return <div className="">
        <h3>{nombre}</h3>
        <p>Come {vacas} vacas al dia</p>
        <img src={img}></img>
        <button onClick={onClick}>Contador</button>
    </div>
}

export default CardRey