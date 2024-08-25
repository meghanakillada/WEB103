import React from 'react';
import './ContentCreatorCard.css';

function ContentCreatorCard(props) {
    return (
        <div className="ContentCreatorCard">
            {props.imageURL && <img src={props.imageURL} alt={`${props.name}'s profile`} className="card-img-top" />}
            <div className="card-body">
                <h2 className="card-title">{props.name}</h2>
                <p className="card-text">{props.description}</p>
                <a href={props.url}>Channel</a><br/><br/>
                <a href={'/view/' + props.id} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    <button className="headerBtn"> View More </button>
                </a>
            </div>
        </div>
    );
}

export default ContentCreatorCard;
