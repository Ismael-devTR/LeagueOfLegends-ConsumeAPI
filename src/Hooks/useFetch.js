import {useEffect, useState} from "react"

const useFetch = (url) => {
    const [data, setdata] = useState(null);
    const [isLoading, setisLoading] = useState(false);
    // const [error, seterror] = useState(false);
    // const [isMessage, setisMessage] = useState("");
   
    const loadData = async () =>{
        setisLoading(true);
        const request = await fetch(url);
        const response = await request.json();
        setdata(response.data);
        setisLoading(false);
    }

    useEffect(() => {
        loadData();
    }, []);

    return {data, isLoading}
}

export default useFetch;
