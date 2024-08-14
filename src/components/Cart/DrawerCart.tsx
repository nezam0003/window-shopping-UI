"use client"
import React, { FC, useState } from 'react'
import AntDrawer from '../Drawer/AntDrawer'
import DrawerCartContent from './DrawerCartContent'

interface IProps {
    isOpenDrawer: boolean,
    handleCallbackFunc: (event: any, action: string, recordId?: number, data?: any) => void,
    [key: string]: any
}

const initialState = {
    quantity: 1
}

const DrawerCart: FC<IProps> = props => {

    const [quantity, setQuantity] = useState<number>(initialState.quantity);

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity >= 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <>
            <AntDrawer
                drawerWidth="620px"
                drawerTitle="Your Cart"
                isOpenDrawer={props.isOpenDrawer}
                mask={true}
                component={DrawerCartContent}
                quantity={quantity}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                handleCallbackFunc={props.handleCallbackFunc}
            />
        </>
    )
}

export default DrawerCart