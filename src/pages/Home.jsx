import { useEffect, useState } from "react";
import MemeCard from "../components/Card"
import { getAllMemes } from "../api/memes";


const HomePage = () => {
    const [data,setData] = useState([]);


    useEffect(() => {
        getAllMemes().then((meme) => {
            //console.log(meme.data.memes);
            setData(meme.data.memes);
        });
    }, []);


    return (
      <div className="row">
        {data.map((meme) => (
        <MemeCard image = {meme.url} title = {meme.name}/>
      ))}
      </div>
    )
}

export default HomePage;