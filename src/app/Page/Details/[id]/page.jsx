'use client'
import { useParams } from "next/navigation";
import Data from '../../../../Data/cousrse.json'
import Image from "next/image";

import { FaStar } from "react-icons/fa";
import { LuAlarmClock } from "react-icons/lu";

const Detail = ({ params }) => {
    const { id } = useParams(params)
    const matched = Data.filter(i => i.id == id)
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
        <div className="flex justify-center items-center my-3 ">
            <div className="card bg-base-100 w-96 shadow-2xl border border-blue-600">
                <figure className="px-10 pt-10">
                    <Image
                        src={image}
                        alt={instructor}
                        className="rounded-xl"
                        width={350}
                        height={350} />
                </figure>
               
                <div className="card-body items-center text-center">
                    
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p>{level}</p>
                      <p className="text-gray-400">Type: {category}</p>
                    <div className="flex justify-between items-center gap-5">
                        <div className="flex justify-center items-center gap-2"><FaStar></FaStar><p>{rating}</p></div>
                        <div className="flex justify-center items-center gap-2"><LuAlarmClock></LuAlarmClock><p>{duration}</p></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Detail;