import { TodoItem } from "./TodoItem";
import {useRef} from "react";
import "./Todos.css";
import image from '../image.jpg';

export default function Todos(props) {
    let todo_title = useRef(""); //useRef doesn't cause components to re render, hence, better choice in something like input

    function onAdd()
    {
        if (todo_title.current.value !== "")
        {
            props.add(todo_title.current.value);
            todo_title.current.value = "";
        }
    }

    return(
        <div className="container sizing"> 
            <img src={image} alt="lazy" width="270px" height="270px"/>
            <form onSubmit={onAdd}>
                <input type="text" className="mb-2 todo-input-field" ref={todo_title} placeholder="TODO" maxLength={60}></input>
                <button type="submit" className="btn btn-sm btn-primary mx-3 mb-3">Add</button>
            </form>
            {
                props.todos.length === 0 ? <p> Nothing to do... Take a break! </p> :
                <ul id="todo-list">
                {
                    props.todos.map((todo, i)=> {
                        return <li key={todo.sno} className="todo-item m-2"><TodoItem todo={todo} del={props.del}/></li>
                    }) // have to use key when using jsx inside map()
                }
                </ul>
            }
        </div>
    );
}