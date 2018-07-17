import { Icon, Menu } from "antd";
import React from "react";

export interface INode {
    title?: string;
    key?: string;
    id: number;
    name: string;
    icon?: string;
    sub?: INode[];
    depth?: number;
}

export interface IProps {
    nodes: INode[];
    collapsed?: boolean;

    location: any;
}

/**
 * 生成无限极树形结构菜单组件
 * 递归给出的数据
 */
export class MenusComponent extends React.Component<IProps, {}>{
    private currentKey: string;
    private openKeys: string[] = [];

    constructor(props: IProps, context: any) {
        super(props, context);
    }

    /**
     * 渲染组件
     */
    public render() {
        const { nodes, collapsed, location, ...menuOptions } = this.props;
        let menus = [];

        if (nodes && nodes.length) {
            nodes.forEach((n) => {
                n.depth = 1;
            });
            menus = this.renderMenu({
                id: 0,
                key: "",
                name: "root",
                sub: nodes
            });
        }

        return (
            <Menu {...menuOptions} onOpenChange={(keys: string[]) => {
                this.onOpenChange(keys);
            }} defaultOpenKeys={this.openKeys} selectedKeys={[this.currentKey]}>
                {menus}
            </Menu>
        );
    }

    /**
     * 生成Menu.SubMenu
     * @param node      {INode}                     单个数据节点
     * @param children  {Array<Subitem|SubMenu>}    节点所需的子节点
     */
    private renderSubMenus(node: INode, children: any) {
        const { collapsed } = this.props;
        let showTitle = true;

        if (collapsed) {
            showTitle = !node.depth || node.depth > 1;
        }

        return (<Menu.SubMenu uniqueKey={node.key} key={node.key} title={
            <span>
                <Icon type={node.icon || "file"} />
                {showTitle && <span>{node.title || node.name}</span>}
            </span>
        }>
            {children}
        </Menu.SubMenu>);
    }

    /**
     * 生成MenuItem
     * @param node {INode} 单个数据节点
     */
    private renderMenuItem(node: INode, parentNode?: INode) {
        const key = `${(parentNode && parentNode.key) ? parentNode.key + "/" : ""}${node.key}`;
        let isOpen = false;

        if (parentNode && `/${key}` === this.props.location.pathname && parentNode.key) {
            this.currentKey = key;

            if (!this.openKeys.filter((key1: string) => {
                return key1 === parentNode.key;
            }).length) {
                this.openKeys.push(parentNode.key);
                isOpen = true;
            }
        }

        return {
            node: (<Menu.Item key={key}>
                <Icon type={node.icon || "file"} />
                {node.title || node.name}
            </Menu.Item>),
            isOpen
        };
    }

    /**
     * 递归生成所需的所有子节点
     * @param node {INode} 单个数据节点
     */
    private renderMenu(node: INode, parentNode?: INode) {
        const menus: any[] = [];

        if (node.sub && node.sub.length) {
            node.sub.forEach((n: INode) => {
                if (n.sub && n.sub.length) {
                    menus.push(this.renderSubMenus(n, this.renderMenu(n, node)));
                } else {
                    const res = this.renderMenuItem(n, node);

                    if (res.isOpen && parentNode && parentNode.key) {
                        this.openKeys.push(parentNode.key);
                    }
                    menus.push(res.node);
                }
            });
        } else {
            const res = this.renderMenuItem(node, parentNode);

            if (res.isOpen && parentNode && parentNode.key) {
                this.openKeys.push(parentNode.key);
            }
            menus.push(res.node);
        }

        return menus;
    }

    private onOpenChange(openKeys: string[]) {
        this.openKeys = openKeys;
    }
}
