import React, {useState} from "react";



//create your first component
const Elementos = () => {
    const [texto, setTexto] = useState("");
    const [tareas, setTareas] = useState([]);
    const [counter, setCounter] = useState(0);
    //Fetch
    fetch('https://playground.4geeks.com/todo/todos/${usuario}', {
      method: "POST",
      body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok); // Será true si la respuesta es exitosa
        console.log(resp.status); // El código de estado 200, 300, 400, etc.
        console.log(resp.text()); // Intentará devolver el resultado exacto como string
        return resp.json(); // Intentará parsear el resultado a JSON y retornará una promesa donde puedes usar .then para seguir con la lógica
    })
    .then(data => {
        // Aquí es donde debe comenzar tu código después de que finalice la búsqueda
        console.log(data); // Esto imprimirá en la consola el objeto exacto recibido del servidor
    })
    .catch(error => {
        // Manejo de errores
        console.log(error);
    });
    //mi segunda prueba
    const agregarTarea = (e) => {
        if (e.key === 'Enter' && texto !== '') {
            setTareas([...tareas, texto]);
            setTexto('');
            setCounter(counter + 1);
        }
    };
    const eliminarTarea = (indice) => {
        const nuevasTareas = [...tareas];
        nuevasTareas.splice(indice, 1);
        setTareas(nuevasTareas);
        setCounter(counter -1);
    }
    
    const handleChange = (e) => {
        setTexto(e.target.value);
    };
	return (
        <div className="caja container d-flex flex-column justify-content-center text-center">
            <h1>TAREAS</h1>
            <div className="carta card">
                <input className="entrada text-start ps-5" type="text" value={texto} onChange={handleChange} onKeyDown={agregarTarea} />
                
                <ul className="m-0 p-0" >{tareas.map((item, index) => (
                    <div className="cajita d-flex">
                        <p className="ps-5" key={index}>{item}
                        </p>
                        <button className="x btn-sm  rounded-pill ms-auto text-end" onClick={() => eliminarTarea(index)}>X</button>
                    </div>
                        
                    ))}
                </ul>
                <p className="pie text-start p-2">{counter} items left</p>
            </div>
        
        </div>
	);
};

export default Elementos;
