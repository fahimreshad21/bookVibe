import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';

const Reviews = () => {
    const reviewsData = useLoaderData();
    
    return (
        <div>
            <h2 className='text-center text-3xl dark:text-yellow-700 font-black'>What are Our readers saying?</h2>
            <div className='grid lg:grid-cols-3 gap-4 lg:gap-10 mt-10'>
            {
                reviewsData.map(review => <Review review={review}></Review>)
            }
            </div>
        </div>
    );
};

export default Reviews;