import './TodoItem.css';
import { useState } from 'react';

export const TodoItem = (props) => {
    // useEffect - function passed runs after a render is commited to screen
    // [] - when render FIRST commited to screen

    const [style, setStyle] = useState(props.todo["isPending"] ? "todo-pending" : "todo-done");
    const [anim, setAnim] = useState(false);
    let dblclick = false;

    function handleClick(event) {
        

        setTimeout(() => {
            if (event.detail === 1 && !dblclick) {
                props.setPendingState(props.todo);
                setStyle(style === "todo-pending" ? "todo-done" : "todo-pending");
                dblclick = false;
            }
        }, 250);

        if (event.detail === 2) {
            dblclick = true;
            setAnim(true);

            setTimeout(() => {
                props.del(props.todo);
            }, 210);
        }
    }

    return (
        <div className={"todo my-2 mx-1 fs-5 py-2 px-3 " + style + (anim ? " del-anim" : "")} onClick={handleClick} >
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