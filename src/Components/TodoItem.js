import './TodoItem.css';
//import {useEffect} from 'react';

export const TodoItem = (props) => {
    // useEffect - function passed runs after a render is commited to screen
    // [] - when render FIRST commited to screen
    

    return (
        
            <div className="fs-5 todo-item my-2 px-3" onClick={() => { props.del(props.todo) }}>{props.todo["title"]}</div>
    )

    /*
        <button className="btn btn-danger" onClick={props.del(props.todo)}>Remove</button>
        props.del(props.todo) or props.del() -> when you include parantheses, it gets called during
        render
        <button className="btn btn-danger" ondblclick={() => { props.del(props.todo) }}>Remove</button>
            
    */
}