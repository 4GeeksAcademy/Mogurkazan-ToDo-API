import React, {useState, useEffect} from "react";



//create your first component
const Elementos = () => {
    const [texto, setTexto] = useState("");
    const [tareas, setTareas] = useState([]);
    const [counter, setCounter] = useState(0);
    const [datax, setDatax] = useState({ name: "", todos: [] });

    useEffect(() => {
        toDoList();
    }, []);
    //Fetch
    function toDoList() {
        console.log('to do');
        fetch('https://playground.4geeks.com/todo/users/Mogurkazan')
        .then((response) => response.json())
        .then((data)=> {
            setDatax(data);
            setTareas(tareas => tareas.concat(data.todos));
            setCounter(data.todos.length);
        });
    }
 
    //mi segunda prueba
    const agregarTarea = (e) => {
        if (e.key === 'Enter' && texto !== '') {
            setTareas([...tareas, {label: texto}]);
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
                        <p className="ps-5" key={index}>{item.label}
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
