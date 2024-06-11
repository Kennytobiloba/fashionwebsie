import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../ShopContext/ShopContext';
import ProductDetails from '../ProductDetails/ProductDetails';
import PriceCategory from '../PriceCategory/PriceCategory';
import TabNav from '../TabNav/TabNav';

const Product = () => {
    const { id } = useParams();
    const { all_data } = useContext(ShopContext);
    const product = all_data.find((item) => item.id === parseInt(id));
    if (!product) {
        return (
            <div>Product is not found</div>
        );
    }
    return (
        <div className='lg:w-[80%] w-full mx-auto mt-20 gap-20  flex justify-between flex-col md:flex-row overflow-hidden'>
            <div className='flex flex-col md:max-w-[70%] w-[95%] mx-auto md:mx-0 '>
            <ProductDetails product={product} />
            <TabNav/>
            
            </div>
           <div className='w-[100%] '>
            <PriceCategory />
            </div>
            
        </div>
    )
}

export default Product;
