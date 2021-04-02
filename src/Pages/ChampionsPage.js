import React, {useEffect} from 'react'
import useFetch from "../Hooks/useFetch";
import Aos from "aos";
import "../Styles/main.scss";
import "aos/dist/aos.css";

import ChampionCard from "../Components/ChampionCard";

export default function ChampionsPage() {

    const {data } = useFetch("http://ddragon.leagueoflegends.com/cdn/11.6.1/data/en_US/champion.json");
    
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <div className="content pt-2 champ-content">
            {
               data && Object.values(data).map((item)=> <ChampionCard key={item.key} image={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${item.id}_0.jpg`} name={item.name} id={item.id}/>)
            }
        </div>
    )
}
