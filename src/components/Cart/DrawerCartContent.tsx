import { Button } from 'antd'
import React, { FC, useState } from 'react'
import { CloseOutlined } from '@ant-design/icons';
import { products } from './data'
import { Product } from './type';

interface CartItemProps {
    product: Product
}
interface QuantitySelectorProps {
    quantity: number
}

const DrawerCartContent: FC<any> = (props) => {

    const QuantitySelector: FC<QuantitySelectorProps> = ({ quantity }) => (
        <div className="inline-flex items-center border rounded-md overflow-hidden">
            <button
                onClick={props.decreaseQuantity}
                className="w-10 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
            >
                -
            </button>
            <span className="w-10 h-8 flex items-center justify-center bg-gray-100 border-x text-lg">
                {quantity}
            </span>
            <button
                onClick={props.increaseQuantity}
                className="w-10 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
            >
                +
            </button>
        </div>
    );

    const CartItem: FC<CartItemProps> = ({ product }) => (
        <div className="flex items-center justify-between">
            <img
                src="https://via.placeholder.com/100"
                alt="Product Name"
                className="w-20 h-20 object-cover rounded"
            />
            <div className="ml-2">
                <h3 className="text-lg font-semibold text-gray-800">
                    {product.product_name}
                </h3>
                <div className="">
                    {/* Quantity Selector */}
                    <QuantitySelector quantity={product.quantity} />
                </div>
            </div>
            <div className="">
                <h3 className="text-lg font-semibold text-gray-800">
                    Unit Price
                </h3>
                <span className="text-lg font-semibold text-gray-800">${product.unit_price}</span>
            </div>
            <div>
                <h3 className="text-lg font-semibold text-gray-800">
                    Total
                </h3>
                <span className="text-lg font-semibold text-gray-800">${product.total}</span>

            </div>
            <div className=''>
                <Button
                    type="text"
                    icon={<CloseOutlined />}
                    className="text-red-500 hover:text-red-700"
                />
            </div>
        </div>
    )

    return (
        <>
            <div className="space-y-6">
                {/* Cart Item */}
                {products?.map((product, index) => <CartItem product={product} key={index} />)}
                {/* Add more Cart Items here as needed */}
            </div>
            <div className="mt-6 border-t pt-4">
                <div className="flex justify-between text-lg font-semibold text-gray-800">
                    <span>Total:</span>
                    <span>$99.99</span>
                </div>
                <Button type="primary" className="w-full mt-4">
                    Proceed to Checkout
                </Button>
            </div>
        </>
    )
}

export default DrawerCartContent