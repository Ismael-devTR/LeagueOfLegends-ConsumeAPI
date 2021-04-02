import React, { useEffect } from "react"
import useFetch from "../Hooks/useFetch";
import Aos from "aos";
import "aos/dist/aos.css";


export default function ChampionsInfo({ match }) {
    const { id } = match.params;
    const { data } = useFetch(`http://ddragon.leagueoflegends.com/cdn/11.6.1/data/en_US/champion/${id}.json`)
    
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <div className="content pt-2 champ-content">
                <h1 data-aos="fade-down-right">{id}</h1>
                {
                    data && Object.values(data).map(item => (
                        <div key={item.id} className="info-container">
                            <div className="champion-section">
                                <img data-aos="fade-right" src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${match.params.id}_0.jpg`} />
            
                                <div className="info-card">
                                    <p data-aos="fade-up" className="label-item">Title:</p>
                                    <p data-aos="fade-up">{item.title}</p>
                                    <p data-aos="fade-up" className="label-item">Description:</p>
                                    <p data-aos="fade-up">{item.lore}</p>
                                </div>
                            </div>

                    </div>
                    ))
                }
        </div>
    )
}
