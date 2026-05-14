import Data from '../../../Data/cousrse.json'
import Course_card from '@/Components/Course_card';
const page = () => {
    
    return (
        <div>
            cousrse:
            <div className='grid grid-cols-3'>
                { Data.map( data => <Course_card data={data} key={data.id}></Course_card>)}
            </div>
        </div>
    );
};

export default page;