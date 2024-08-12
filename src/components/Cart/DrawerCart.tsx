"use client"
import React, { FC } from 'react'
import AntDrawer from '../Drawer/AntDrawer'
import DrawerCartContent from './DrawerCartContent'

interface IProps {
    isOpenDrawer: boolean,
    handleCallbackFunc: (event: any, action: string, recordId?: number, data?: any) => void,
    [key: string]: any
}

const DrawerCart: FC<IProps> = props => {

    return (
        <>
            <AntDrawer
                drawerWidth="520px"
                drawerTitle="Your Cart"
                isOpenDrawer={props.isOpenDrawer}
                mask={true}
                component={DrawerCartContent}
                handleCallbackFunc={props.handleCallbackFunc}
            />
        </>
    )
}

export default DrawerCart