import { TodoItem } from "./TodoItem";
import {useRef} from "react";
import "./Todos.css";
import image from '../image.jpg';

export default function Todos(props) {
    let todo_title = useRef(""); //useRef doesn't cause components to re render, hence, better choice in something like input

    function onAdd(e)
    {
        e.preventDefault();
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
                <input type="text" className="mb-2 todo-input-field p-1" ref={todo_title} placeholder="TODO" maxLength={60}/>
                <button type="submit" className="btn btn btn-primary p mb-3">Add</button>
            </form>
            {
                props.todos.length === 0 ? <p> Nothing to do... Take a break! </p> :
                <div id="todo-list">
                {
                    props.todos.map((todo, i)=> {
                        return <TodoItem key={todo.sno} todo={todo} del={props.del}/>
                    }) // have to use key when using jsx inside map()
                }
                </div>
            }
        </div>
    );
}