"use client"
import { Modal } from 'antd'
import React, { FC } from 'react'
import CustomScrollbar from '../Scrollbar/CustomScrollbar'
import useResponsiveMediaQuery from '@/hooks/useResponsiveMediaQuery'

interface ModalViewProps {
    formRef: any,
    modalTitle: string,
    loading?: boolean,
    isShowModal: boolean,
    modalWidth?: string,
    component?: any,
    handleCallbackFunc: (event: any, action: string, recordId?: number, data?: any) => {},
    [key: string]: any
}

const ModalView: FC<ModalViewProps> = props => {
    const { isSmall } = useResponsiveMediaQuery()
    const { component: Component, ...restProps } = props
    return (
        <>
            <Modal
                width={isSmall ? "100%" : props.modalWidth ? props.modalWidth : "1024px"}
            >
                <CustomScrollbar>
                    {Component ? <Component /> : null}
                </CustomScrollbar>
            </Modal>
        </>
    )
}

export default ModalView