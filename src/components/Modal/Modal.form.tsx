"use client"
import React, { FC } from 'react'

interface ModalFormProps {
    formRef: any,
    modalTitle: string,
    loading?: boolean,
    isShowModal: boolean,
    modalWidth?: string,
    component?: any,
    handleCallbackFunc: (event: any, action: string, recordId?: number, data?: any) => {},
    [key: string]: any
}

const ModalForm: FC<ModalFormProps> = props => {
    return (
        <div>ModalForm</div>
    )
}

export default ModalForm