import React, { FC, Fragment } from 'react'
import { Drawer, Spin, Button } from 'antd';
import { useTranslation } from "react-i18next";
import CustomScrollbar from "../Scrollbar/CustomScrollbar";
import useResponsiveMediaQuery from '@/hooks/useResponsiveMediaQuery';

interface IProps {
    drawerWidth?: any,
    modalTitle: any,
    loading?: boolean,
    isShowView: any,
    itemData: any,
    children?: any,
    component?: any,
    handleCallbackFunc: any,
    [key: string]: any,
}

const DrawerView: FC<IProps> = props => {
    const { t } = useTranslation();
    const { isSmall } = useResponsiveMediaQuery()
    const { modalTitle, loading = false, drawerWidth, isShowView, itemData, children, component: Component, handleCallbackFunc, ...restProps } = props;
    return (
        <Fragment>
            <Drawer
                width={isSmall ? "100%" : drawerWidth ? drawerWidth : "60%"}
                zIndex={500}
                className="view-page-drawer view-page-drawer-example"
                title={<b>{t(modalTitle)}&nbsp;&nbsp;{loading && <Spin size="small" />}</b>}
                mask={false}
                visible={isShowView}
                onClose={(event) => handleCallbackFunc(null, 'hideView')}
                footer={[
                    <Button key='close' onClick={(event) => handleCallbackFunc(null, 'hideView')}>{t('Close')}</Button>,
                ]}
            >
                <CustomScrollbar className="view-page-drawer-scrollbar">
                    <Component
                        loading={loading}
                        itemData={itemData}
                        handleCallbackFunc={handleCallbackFunc}
                        {...restProps}
                    />
                </CustomScrollbar>
            </Drawer>
        </Fragment>
    );
}
export default React.memo(DrawerView);