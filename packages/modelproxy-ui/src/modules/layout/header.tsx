import { Avatar, Col,  Dropdown, Menu, Row } from "antd";
import React from "react";

const menu = <Menu>
    <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="javascript:;">退出</a>
    </Menu.Item>
    <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="javascript:;">2nd menu item</a>
    </Menu.Item>
    <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="javascript:;">退出</a>
    </Menu.Item>
</Menu>;

export default class Component extends React.PureComponent<any, any>{
    public render() {
        return (
            <Row type="flex" justify="space-between" className="white ml0 mr0">
                <Col className="f3 pl3">
                    Logo
                </Col>

                <Col className="pr3">
                    <Dropdown overlay={menu}>
                        <Avatar size="small" icon="user">Nick</Avatar>
                    </Dropdown>
                </Col>
            </Row>
        );
    }
}

