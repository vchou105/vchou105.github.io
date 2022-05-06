import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import "../css/Project.css";

/**
 * name: name of project
 * text: description of project
 * img: thumbnail of project
 */
function Project(props) {
    
    return (
        <div className="card">
            <Link to={`${props.item.url}`} className="">
            {/* <span>{props.item.name}</span> */}
            <span className="thumbnail">
                <img src={props.item.img} alt={props.item.name}/>
            </span>
            <span className="text">{props.item.text}</span>
            </Link>
            {/* <Outlet/> */}
        </div>
    )
}

export default Project;