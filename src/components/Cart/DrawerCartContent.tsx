import { Button } from 'antd'
import React, { useState } from 'react'
import { CloseOutlined } from '@ant-design/icons';

const DrawerCartContent = () => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const QuantitySelector = () => (
        <div className="inline-flex items-center border rounded-md overflow-hidden">
            <button
                onClick={decreaseQuantity}
                className="w-10 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
            >
                -
            </button>
            <span className="w-10 h-8 flex items-center justify-center bg-gray-100 border-x text-lg">
                {quantity}
            </span>
            <button
                onClick={increaseQuantity}
                className="w-10 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
            >
                +
            </button>
        </div>
    );

    const CartItem = () => (
        <div className="flex items-center justify-between">
            <img
                src="https://via.placeholder.com/100"
                alt="Product Name"
                className="w-20 h-20 object-cover rounded"
            />
            <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold text-gray-800">
                    Product Name
                </h3>
                <div className="flex items-center justify-between mt-2">
                    {/* Quantity Selector */}
                    <QuantitySelector />
                    <span className="text-lg font-semibold text-gray-800">$99.99</span>
                </div>
            </div>
            <div className='mt-9 ml-4'>
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
                <CartItem />
                <CartItem />
                <CartItem />
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