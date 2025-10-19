import React from 'react';
import Marquee from 'react-fast-marquee';

const LatesNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='gap-5' pauseOnHover={true}>
                <p className='font-bold'>🌍 Breaking News: Global tech markets tumble as major supply chain disruptions hit Asian semiconductor exports, raising concerns over smartphone and EV production worldwide.</p>
            </Marquee>
            
        </div>
    );
};

export default LatesNews;