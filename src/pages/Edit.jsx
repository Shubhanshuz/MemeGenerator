import { useState, useRef } from 'react';
import { Button } from 'react-bootstrap';
import {useSearchParams} from 'react-router-dom'
import Text from '../components/Text';
import { exportComponentAsJPEG } from 'react-component-export-image';


const Edit = () => {
    const [params] = useSearchParams();
    const[count,setCount] = useState(0);

    const addText = () => {
        setCount(count+1);
    }

    const memeRef = useRef();
    return (
        <div>
            <div ref={memeRef} className='meme' style={{width : "600px", border : '1px solid'}}>
            <img src = {params.get("url")} width= '200px'/>
            {Array(count).fill(0).map((curr) => (
                <Text />
            ))}
            </div>
            <Button onClick={addText}> Add Text </Button>
            <Button variant = "success" onClick={() => {exportComponentAsJPEG(memeRef)}}> Save </Button>
        </div>
    )
}

export default Edit;