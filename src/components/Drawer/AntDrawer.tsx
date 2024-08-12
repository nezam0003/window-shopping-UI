import React, { FC, Fragment } from 'react'
import { Drawer, Spin, Button } from 'antd';
import { useTranslation } from "react-i18next";
import CustomScrollbar from "../Scrollbar/CustomScrollbar";
import useResponsiveMediaQuery from '@/hooks/useResponsiveMediaQuery';

interface IProps {
    drawerWidth?: string,
    drawerTitle: string,
    loading?: boolean,
    isOpenDrawer: boolean,
    mask?: boolean,
    placement?: 'top' | 'bottom' | 'left' | 'right',
    footerContent?: any,
    itemData?: any,
    children?: React.ReactNode,
    component?: any,
    handleCallbackFunc: (event: any, action: string, recordId?: number, data?: any) => void,
    [key: string]: any
}

const AntDrawer: FC<IProps> = props => {
    const { t } = useTranslation();
    const { isSmall } = useResponsiveMediaQuery()

    const { mask = false, placement = 'right', footerContent: FooterContent, component: Component, ...restProps } = props;

    const Footer = () => (
        <Button key='close' onClick={(event) => props.handleCallbackFunc(null, 'hide_drawer')}>{t('Close')}</Button>
    )

    return (
        <Fragment>
            <Drawer
                // className='p-4'
                width={isSmall ? "100%" : props.drawerWidth ? props.drawerWidth : "60%"}
                placement={placement}
                title={<b>{t(props.drawerTitle)}&nbsp;&nbsp;{props.loading && <Spin size="small" />}</b>}
                mask={mask}
                open={props.isOpenDrawer}
                onClose={(event) => props.handleCallbackFunc(null, 'hide_drawer')}
                extra={false}
                footer={FooterContent ? <FooterContent /> : false}
            >
                <CustomScrollbar className="view-page-drawer-scrollbar">
                    {Component ? <Component {...restProps} /> : null}
                </CustomScrollbar>
            </Drawer>
        </Fragment>
    );
}
export default React.memo(AntDrawer);