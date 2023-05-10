import './TodoItem.css';
import { useState } from 'react';

export const TodoItem = (props) => {
    // useEffect - function passed runs after a render is commited to screen
    // [] - when render FIRST commited to screen
    
    const [style, setStyle] = useState("todo-pending");

    function toggleStrike()
    {
        if (style === "todo-pending")
            setStyle("todo-done");
        if (style === "todo-done")
            setStyle("todo-pending");
    }

    function handleDoubleClick()
    {
        props.del(props.todo);
    }

    return (  
        <div className={"todo my-2 mx-1 fs-5 py-2 px-3 " + style} onClick = {toggleStrike} onDoubleClick={handleDoubleClick}>
            {props.todo["title"]}
        </div>     
    )

    /*
        <button className="btn btn-danger" onClick={props.del(props.todo)}>Remove</button>
        props.del(props.todo) or props.del() -> when you include parantheses, it gets called during
        render
        <button className="btn btn-danger" ondblclick={() => { props.del(props.todo) }}>Remove</button>
            
    */
}