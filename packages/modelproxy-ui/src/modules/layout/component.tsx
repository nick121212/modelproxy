import { Layout } from "antd";
import React from "react";
import { renderRoutes } from "react-router-config";

import { default as HeaderComponent } from "./header";
import { default as LeftSiderComponent } from "./left";

export default class Component extends React.PureComponent<any, any>{
    public render() {
        const { route } = this.props;

        return (
            <Layout className="h-100 overflow-hidden">
                <Layout.Header className="bg-black pa0">
                    <HeaderComponent />
                </Layout.Header>
                <Layout>
                    <Layout.Sider width={256} className="overflow-hiddne bg-white">
                        <LeftSiderComponent />
                    </Layout.Sider>
                    <Layout className="ma1">
                        {renderRoutes(route.routes)}
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

