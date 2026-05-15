'use client'
import Data from '../../../Data/cousrse.json'
import Course_card from '@/Components/Course_card';
import { useState } from 'react';
const Course = () => {
    const [search,setSearch] = useState('')
    const handletext = (e) => {
      setSearch(e.target.value)
    }
    const filtered = Data.filter( i => i.title.toLowerCase().includes(search))

    return (
        <div>
            <div className='flex justify-around'>
                <div>Courses</div>
                <div>
                   <input value={search} type="text" className='border border-amber-300' onChange={handletext} />
                </div>
            </div>
            <div className='grid grid-cols-3'>
                { filtered.length>0 ?
                filtered.map(data => <Course_card data={data} key={data.id}></Course_card>):
                Data.map(data => <Course_card data={data} key={data.id}></Course_card>)}
            </div>
        </div>
    );
};

export default Course;