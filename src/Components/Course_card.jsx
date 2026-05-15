'use client'
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { LuAlarmClock } from "react-icons/lu";

const Course_card = ({ data }) => {
    const {
        id,
        title,
        instructor,
        duration,
        rating,
        level,
        image,
       
    } = data
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
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
                <p>{level}</p>
                <div className="flex justify-between items-center gap-5">
                    <div className="flex justify-center items-center gap-2"><FaStar></FaStar><p>{rating}</p></div>
                    <div className="flex justify-center items-center gap-2"><LuAlarmClock></LuAlarmClock><p>{duration}</p></div>
                </div>
                <div className="card-actions">
                    <Link href={`/Page/Details/${id}`} className="btn btn-primary">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Course_card;