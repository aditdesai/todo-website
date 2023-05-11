import "./About.css";
import { Link } from "react-router-dom";

export const About = () => {
    return (
        <div className="jumbotron my-4 mx-auto">
            <h1 className="display-4">TODOS List</h1>
            <p className="lead">This is a Progressive Web App (PWA) that helps me maintain a TODO list to keep me productive</p>
            <hr className="my-4"/>
            <p>Get started by clicking the button below.</p>
            <Link className="btn btn-primary btn-lg" to="/">Home</Link>
        </div>
    )
}