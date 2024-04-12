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
        fetch('https://playground.4geeks.com/todo/users/Mogurkazan')
        .then((response) => response.json())
        .then((data)=> {
            setDatax(data);
            setTareas(tareas => tareas.concat(data.todos));
            setCounter(data.todos.length);
        });
    }
    function agregarTarea(e) {
        if (e.key === 'Enter' && texto !== '') {
            setTareas([...tareas, { label: texto }]);
            setTexto('');
            setCounter(counter + 1);

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "label": texto,
                    "is_done": false
                })
            };

            fetch('https://playground.4geeks.com/todo/todos/Mogurkazan', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data)); // Manejar la respuesta si es necesario
        }
    }
    const eliminarTarea = (indice) => {
        const tareaAEliminar = tareas[indice];
        const nuevasTareas = tareas.filter((_, index) => index !== indice);
        setTareas(nuevasTareas);
        setCounter(counter - 1);
    
        fetch(`https://playground.4geeks.com/todo/todos/${tareaAEliminar.id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete task');
            }
            console.log(`Task with ID ${tareaAEliminar.id} deleted successfully`);
        })
        .catch(error => {
            console.error(error);
        });
    };
    
    
    const handleChange = (e) => {
        setTexto(e.target.value);
    };
	return (
        <div className="caja container d-flex flex-column justify-content-center text-center">
            <h1>Mogurkazan</h1>
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
