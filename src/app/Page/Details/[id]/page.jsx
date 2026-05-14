'use client'
import { useParams } from "next/navigation";
import Data from '../../../../Data/cousrse.json'


const Detail = ({params}) => {
    const {id} = useParams(params)
    const matched = Data.filter( i => i.id == id)
    const {
        title,
        instructor,
        duration,
        rating,
        level,
        description,
        image,
        category,
    } = matched[0]

    console.log(title)
    
    return (
        <div>
            cousrse detail
             
             <p>  {title} </p>
             <p>surprise................</p>
             
        </div>
    );
};

export default Detail;