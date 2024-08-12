"use client"
import useResponsiveMediaQuery from '@/hooks/useResponsiveMediaQuery'
import { Button, Modal, Spin } from 'antd'
import React, { FC } from 'react'
import CustomScrollbar from '../Scrollbar/CustomScrollbar'
import { useLang } from '@/hooks/useLang'
import { XIcon, DocumentCheck } from '../Icon/svg'

interface ModalProps {
    formRef: any,
    modalTitle: string,
    loading?: boolean,
    isOpenModal: boolean,
    modalWidth?: string,
    component?: any,
    handleCallbackFunc: (event: any, action: string, recordId?: number, data?: any) => void,
    [key: string]: any
}

const AntModal: FC<ModalProps> = props => {
    const { isSmall } = useResponsiveMediaQuery()
    const { t } = useLang()
    const { component: Component, ...restProps } = props

    const onSubmit = () => {
        props.formRef.submit();
    }

    const FooterContent = () => (
        <>
            <Button key='cancel' onClick={() => props.handleCallbackFunc(null, 'hideModal')}>
                {t('Cancel')}  <XIcon />
            </Button>
            <Button className='btn-blue' key='submit' type='primary' loading={props.loading} onClick={onSubmit}>
                {t('Save')} <DocumentCheck />
            </Button>
        </>
    )

    return (
        <>
            <Modal
                width={isSmall ? "100%" : props.modalWidth ? props.modalWidth : "1024px"}
                title={<b>{t(props.modalTitle)}&nbsp;&nbsp;{props.loading && <Spin size="small" />}</b>}
                maskClosable={false}
                open={props.isOpenModal}
                onCancel={() => props.handleCallbackFunc(null, "hideModal")}
                footer={<FooterContent />}
            >
                <CustomScrollbar>
                    {Component ? <Component {...restProps} /> : null}
                </CustomScrollbar>
            </Modal>
        </>
    )
}

export default AntModal