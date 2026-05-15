import React from 'react';
import Data from '../Data/cousrse.json'
import Course_card from './Course_card';

const PopularCourse = () => {
    const filtered = Data.sort((a,b) => b.rating - a.rating).slice(0,3)
    console.log(filtered)
    return (
        <div  className='mt-5 container mx-auto '>
            <h1 className='font-bold text-2xl text-center my-3'>Popular Course</h1>
             <div className='grid grid-cols-1 lg:grid-cols-3'>
                {
                    filtered.map( data => <Course_card key={data.id} data={data}></Course_card>)
                }
             </div>
        </div>
    );
};



export default PopularCourse;