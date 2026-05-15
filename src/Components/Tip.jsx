import React from 'react';
import Data from '../Data/studyTecnique.json'
import Image from 'next/image';
const Tip = () => {
    return (
        <div className=' p-3 rounded-md space-y-2 my-8 container mx-auto'>
            <h1 className='text-center font-bold text-2xl'>Study Technique</h1>
             <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                {Data.map( i => <Card key={i.id} i={i}></Card>)}
             </div>
        </div>
    );
};

const Card = ({i}) => {
    const {title,description,image_url,button_text,difficulty_level} = i
    return(<div className='bg-green-300 text-center flex flex-col justify-center items-center space-y-2 rounded-2xl px-5 py-2 border border-green-800'>
           <div><Image src={image_url} alt={title} width={150} height={150} className='rounded-md'/></div>
           <h1 className='font-bold text-2xl'>{title}</h1>
            <div className='w-fit rounded-md p-1 bg-white'>{difficulty_level}</div>
            <h1>{description}</h1>
            <button className='btn btn-primary'>{button_text}</button>
    </div>)

}

export default Tip;