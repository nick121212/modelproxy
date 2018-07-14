import { Layout, Menu } from "antd";
import React from "react";
import { renderRoutes } from "react-router-config";

const { Header, Content, Footer } = Layout;

export default class Component extends React.PureComponent<any, any>{
    public render() {
        const { route } = this.props;

        return (
            <Layout className="h-100 overflow-hidden">
                <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}>
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Content className="h-100 overflow-hidden">
                    {renderRoutes(route.routes)}
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2016 Created by Ant UED
                </Footer>
            </Layout>
        );
    }
}

