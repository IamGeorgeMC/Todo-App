import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoFormulario.css';


function TodoFormulario () {
    const logo = require('./img_todo.jpg');
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const [newTodoValueDate, setNewTodoValueDate] = React.useState('');
    const { addTodo } = React.useContext(TodoContext) 

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onChangeData = (event) => {
        setNewTodoValueDate(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue, newTodoValueDate);

    };

    return (
        <div className="div">
            <form style={form} onSubmit={onSubmit}>
                <label>Crear nuevo</label>
                <input className="input" type="text" value={newTodoValue} onChange={onChange} placeholder="Descripción"/>
                <input className="input" type="date" value={newTodoValueDate} onChange={onChangeData}/>
                <div className="buttonContainer">
                    <button className="button" type="submit">
                        Añadir
                    </button>
                </div>
                <img style={img} src={logo}/>
            </form>
        </div>
    );
}

const img = {
    width: '100%', 
    padding: 20
}

const form = {
    background: 'radial-gradient(circle, rgba(214,214,214,1) 0%, rgba(232,232,232,1) 100%)',
    padding: '18px 40px', 
    borderRadius: '20px'

}

export { TodoFormulario };

