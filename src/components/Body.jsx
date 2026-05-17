import { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [memes, setMemes] = useState(null);

    const fetchData = async () => {
        const response = await fetch('https://meme-api.com/gimme/20');
        const data = await response.json();
        setMemes(data?.memes);
    }

    useEffect(() => {
        fetchData();
    }, []);

    console.log('memes', memes);

    return (
        <div className="flex flex-wrap">
            {
               !memes ? <Shimmer /> : memes && memes.map((meme, index) => <MemeCard key={index} {...meme} />)
            }
        </div>
    )
}

export default Body;