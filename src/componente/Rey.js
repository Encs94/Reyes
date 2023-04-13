
const Rey = (props) => {

    

    return <div className="">
        <h3>{props.nombre}</h3>
        <p>Come {props.vacas} vacas al dia</p>
        <img src={props.img}></img>
        <button onClick={props.funcion}>Contador</button>
    </div>

}

export default Rey