import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import RightAside from '../Home/RightAside';
import DetailsCard from '../../Components/NewsDetailsCard/DetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {

    const data = useLoaderData()
    const {id} = useParams()
    const [news,setNews] = useState({})

    useEffect(()=>{
        const newsDetails = data.find(newsItem => newsItem.id == id);
        setNews(newsDetails)
    },[data,id])
    return (
        <div>
            <header className='py-3'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-12 gap-5'>
            <section className='col-span-9'>
                <h2 className='font-bold mb-5'>News Details</h2>
                <DetailsCard news={news}></DetailsCard>
            </section>
            <aside className='col-span-3'>
                <RightAside></RightAside>
            </aside>
            </main>
        </div>
    );
};

export default NewsDetails;