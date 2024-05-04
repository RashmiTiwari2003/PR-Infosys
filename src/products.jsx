import React from 'react'
import productsData from './data/products-data'

const Items = () => {
    return (
        <div id='products'>
            <div className='flex flex-col px-4 py-4 max-w-full min-h-[80vh]'>
                <div className='flex flex-col items-center'>
                    <div className='flex flex-row justify-center w-fit font-semibold'>
                        <h1 className='px-5 text-lg md:text-2xl'>Products & Electronics Repair</h1>
                    </div>
                </div>
                <div className='flex flex-wrap justify-around gap-8 px-4 py-8 justify'>
                    {productsData.map((product,ind) => (
                        <div key={ind} className='flex flex-col border-2 shadow-md rounded-xl w-80'>
                            <div className='relative flex justify-center items-center border-2 h-40'>
                                <img src={product.img} alt="Product" className='-z-10 absolute w-full h-full object-cover' />
                                <h1 className='font-bold text-white text-xl'>{product.name}</h1>
                            </div>
                            <div className='flex justify-center items-center border-2 px-2 py-1 h-12 text-center'>{product.text}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Items
