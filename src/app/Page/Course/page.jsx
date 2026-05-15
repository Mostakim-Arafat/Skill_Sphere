'use client'
import Data from '../../../Data/cousrse.json'
import Course_card from '@/Components/Course_card';
import { useState } from 'react';
const Course = () => {
    const [search, setSearch] = useState('')
    const handletext = (e) => {
        setSearch(e.target.value)
    }
    const filtered = Data.filter(i => i.title.toLowerCase().includes(search))

    return (
        <div>
            <div className='flex justify-center items-center my-5'>
                
                <div>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                         <input value={search} type="text" placeholder='Search' onChange={handletext} />
                    </label>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-3 container mx-auto'>
                {filtered.length > 0 ?
                    filtered.map(data => <Course_card data={data} key={data.id}></Course_card>) :
                    Data.map(data => <Course_card data={data} key={data.id}></Course_card>)}
            </div>
        </div>
    );
};

export default Course;