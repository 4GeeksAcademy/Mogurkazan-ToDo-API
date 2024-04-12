import React, {useEffect, useState} from "react";

export const GetApi = () => {
    const [datax, setDatax] = useState({ name: "", todos: [] });
        function getDoList() {
            console.log('to do');
            fetch('https://playground.4geeks.com/todo/users/Mogurkazan')
            .then((response) => response.json())
            .then((data)=> setDatax(data))
        }
        function postDoList() {
            console.log('to do');
            fetch('https://playground.4geeks.com/todo/users/Mogurkazan')
            .then((response) => response.json())
            .then((data)=> setDatax(data))
        }
        // useEffect(() => {
        //     toDoList();
        // }, []);
    return (
        <div className="text-center">
            <h1 className="text-center mt-05">{datax.name}</h1>
            <ul>
                {datax.todos.map((todo, index) => (
                    <li key={index}>{todo.label}</li>
                ))}
            </ul>
            <button onClick={getDoList}>cargar</button>
        </div>
    )
};