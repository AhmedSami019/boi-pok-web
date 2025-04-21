import React from 'react';
import Image from '../../assets/banner-book.png'

const Banner = () => {
    return (
        <div className='flex justify-between p-10 rounded-2xl bg-gray-200 mb-10'>
            <div className='w-1/2 my-auto'>
            <h2 className='text-6xl/18 font-bold mb-15'>Books to freshen up your bookshelf</h2>
            <button className="btn p-6 bg-[#23BE0A] text-white">View The List</button>
            </div>
            <img className='h-96 mr-10' src={Image} alt="here was a picture of a book" />
        </div>
    );
};

export default Banner;