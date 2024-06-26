import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../ShopContext/ShopContext';
import ProductDetails from '../ProductDetails/ProductDetails';
import PriceCategory from '../PriceCategory/PriceCategory';
import TabNav from '../TabNav/TabNav';

const Product = () => {
    const { id } = useParams();
    const { all_data } = useContext(ShopContext);
    const product = all_data.find((item) => item.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) {
        return (
            <div>Product is not found</div>
        );
    }

    return (
        <div className='2xl:w-[80%] md:w-[100%] w-[90%]  mx-auto mt-20 md:gap-10 lg:gap-20 gap-20  flex justify-between flex-col md:flex-row overflow-hidden'>
            <div className='flex flex-col md:max-w-[68%] lg:max-w-[60%] 2xl:max-w-[70%] w-[95%] mx-auto md:mx-0 '>
                <ProductDetails product={product} />
                <TabNav />
            </div>
            <div className='w-[100%]'>
                <PriceCategory />
            </div>
        </div>
    );
};

export default Product;
