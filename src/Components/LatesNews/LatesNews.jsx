import { Newspaper } from 'lucide-react';
import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = ({data}) => {

  // Filter the data first
  const todaysPicks = data.filter(news => news.others?.is_today_pick === true);

  return (
    <div className='flex items-center gap-5 bg-base-200 p-3'>
      <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
      <Marquee className='gap-5' pauseOnHover={true}>
        {todaysPicks.map(news => (
          <span key={news.id} className='font-bold mr-5 flex items-center gap-2 '>
           <Newspaper></Newspaper><span className="bg-gradient-to-r from-pink-600 via-rose-500 to-gray-700 bg-clip-text text-transparent font-bold">
  {news.title}
</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;
