"use client"
import React, { FC, useState } from 'react'
import DrawerCart from './DrawerCart'
import { ShoppingCart } from "@/components/Icon/svg";

const initialState = {
    isOpenDrawer: false
}

const Cart: FC<any> = props => {
    const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(initialState.isOpenDrawer)

    const handleActions = (action: string, recordId?: any) => {
        if (action === 'show_cart') {
            setIsOpenDrawer(true);
        }
    };

    const handleHideCartDrawer = () => {
        setIsOpenDrawer(false);
    };

    const handleCallbackFunc = (event: any, action: string, recordId?: any, data?: any) => {
        if (event === null || event === undefined || event === '') {
            event = event ? event : 'singleAction';
        }
        if (event == 'singleAction' && action == 'show_cart') {
            handleActions("show_cart")
        }
        else if (event == 'singleAction' && action == 'hide_drawer') {
            handleHideCartDrawer()
        }
    }

    return (
        <>
            <div className='cursor-pointer hover:text-red-600' >
                <div onClick={() => handleCallbackFunc(null, 'show_cart')}>
                    <ShoppingCart />
                </div>
            </div>
            <DrawerCart
                isOpenDrawer={isOpenDrawer}
                handleCallbackFunc={handleCallbackFunc}
            />
        </>
    )
}

export default Cart