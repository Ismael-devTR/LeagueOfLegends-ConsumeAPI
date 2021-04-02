import React from 'react'
import {Link} from "react-router-dom"
import "./styles.scss";

export default function ChampionCard(props) {
    const {image, name, id} = props;

    return (
        <div data-aos="fade-right" className="card">
            <Link className="link" to={`/champion/${id}`} >
                <img src={image} alt={name}/>
                <h2>{name}</h2>
            </Link>
        </div>
    )
}
