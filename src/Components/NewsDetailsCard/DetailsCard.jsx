import { MoveLeft } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const DetailsCard = ({news}) => {
    return (
        <div>
            <img className='w-full h-[350px]' src={news.thumbnail_url} alt="" />
            <h2 className='text-2xl'>{news.title}</h2>
            <p className='mt-10'>{news.details}</p>
            <Link to={`/category/${news.category_id}`}><button className='btn btn-secondary mt-5'><MoveLeft></MoveLeft> All news in this Category</button></Link>
        </div>
    );
};

export default DetailsCard;