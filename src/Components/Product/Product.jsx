import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../ShopContext/ShopContext';
import ProductDetails from '../ProductDetails/ProductDetails';
import PriceCategory from '../PriceCategory/PriceCategory';

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
        <div className='lg:w-[80%] w-full mx-auto mt-20  flex justify-between flex-col md:flex-row'>
            <ProductDetails product={product} />
            <PriceCategory />
        </div>
    )
}

export default Product;
