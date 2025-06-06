import React, { useContext } from 'react'
import ProductCard from './ProductCard'
import { AppContext } from '../context/AppContext'

const RelatedProducts = ({ relatedProducts }) => {
    const { navigate } = useContext(AppContext);
    return (
        <div className='flex flex-col items-center mt-20'>
            <div className='flex flex-col items-center w-max'>
                <p className='text-3xl font-medium'>Related Products</p>
                <div className="w-20 h-0.5 bg-primary rounded-full mt-2"></div>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6 w-full'>
                {
                    relatedProducts.filter((product) => product.inStock).map((product, index) => {
                        return (
                            <ProductCard key={index} product={product} />
                        )
                    })
                }
            </div>
            <button onClick={() => { navigate("/products"); scrollTo(0, 0) }} className='mx-auto cursor-pointer px-12 my-16 py-2.5 border rounded text-primary hover:bg-primary/10 transition'>See more</button>
        </div>
    )
}

export default RelatedProducts