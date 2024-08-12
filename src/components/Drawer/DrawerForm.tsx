import React, { FC, Fragment } from 'react'
import { Drawer, Spin, Button, Space } from 'antd';
import { useTranslation } from "react-i18next";
import CustomScrollbar from "../Scrollbar/CustomScrollbar";
import useResponsiveMediaQuery from '@/hooks/useResponsiveMediaQuery';

interface IProps {
    submitButtonText?: string
    formRef: any,
    drawerWidth?: any,
    modalTitle: any,
    loading: any,
    isShowForm: any,
    children?: any,
    component?: any,
    handleCallbackFunc: any,
    [key: string]: any,
}

const DrawerForm: FC<IProps> = props => {
    const { t } = useTranslation();
    const { isSmall } = useResponsiveMediaQuery()
    const { formRef, submitButtonText = "Submit", drawerWidth, modalTitle, loading, isShowForm, children, component: Component, handleCallbackFunc, ...restProps } = props;
    const onSubmit = () => {
        formRef.submit();
    }
    return (
        <Fragment>
            <Drawer
                width={isSmall ? "100%" : drawerWidth ? drawerWidth : "60%"}
                className="form-page-drawer form-page-drawer-example"
                title={<b>{t(modalTitle)}&nbsp;&nbsp;{loading && <Spin size="small" />}</b>}
                visible={isShowForm}
                onClose={(event) => handleCallbackFunc(null, 'hideForm')}
                footer={[
                    <Space>
                        <Button key='cancel' onClick={(event) => handleCallbackFunc(null, 'hideForm')}>{t('Cancel')}</Button>
                        <Button key='submit' type='primary' loading={loading} onClick={onSubmit}>{t(submitButtonText)}</Button>
                    </Space>
                ]}
            >
                <CustomScrollbar className="form-page-drawer-scrollbar">
                    <Component
                        loading={loading}
                        formRef={formRef}
                        handleCallbackFunc={handleCallbackFunc}
                        {...restProps}
                    />
                </CustomScrollbar>
            </Drawer>
        </Fragment>
    );
}
export default React.memo(DrawerForm);