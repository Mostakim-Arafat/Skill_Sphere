'use client'
import Image from "next/image";
import Link from "next/link";

const Course_card = ({ data }) => {
    console.log(data)
    const {
        id,
        title,
        instructor,
        duration,
        rating,
        level,
        description,
        image,
        category,
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
                <p>{description}</p>
                <p>{level}</p>
                <div className="flex justify-between items-center">
                    <div><p>{rating}</p></div>
                    <div><p>{duration}</p></div>
                </div>
                <div className="card-actions">
                    <Link href={`/Page/Details/${id}`} className="btn btn-primary">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Course_card;