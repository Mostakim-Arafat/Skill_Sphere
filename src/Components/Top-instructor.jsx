import Image from "next/image";
import Data from '../Data/instructor.json'

const Topinstructor = () => {
    return (
        <div className="container mx-auto my-3">
            <h1 className="text-center font-bold text-2xl mb-2">Our Top Tutor</h1>
            <div className="grid gap-2 grid-cols-1 lg:grid-cols-3 ">
                {Data.map(i => <Card key={i.id} i={i}></Card>)}
            </div>
        </div>
    );
};

const Card = ({ i }) => {
    const { name, course, experience, bio, image } = i
    return (
        <div className="p-3 rounded-xl  shadow-2xl text-center flex flex-col justify-center items-center font-semibold">
            <div>
                <Image src={image} alt={name} width={150} height={150} className="rounded-md" />
            </div>
            <div>
                <h1 className="text-2xl">{name}</h1>
                <p>{experience}+ Experience</p>
                <p>{course}</p>
                <p className="text-gray-500">About:</p>
                <p>{bio}</p>
            </div>

        </div>
    );
};

export default Topinstructor;