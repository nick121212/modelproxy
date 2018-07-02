import React from "react";

/**
 * 空组件
 */
export class NoneComponent extends React.PureComponent<any> {
    public render() {
        return (
            <>
                {this.props.children}
            </>
        );
    }
}
