import classnames from "classnames";
import React, { AllHTMLAttributes, PureComponent } from "react";

export interface IProps extends AllHTMLAttributes<Component> {
    toolbar?: any;
}

/**
 * 拦截Link组件，劫持onMouseOver和onMouseOut事件
 */
export default class Component extends PureComponent<IProps>{
    public render() {
        const { children, toolbar, className } = this.props;

        return (
            <div className="flex flex-column flex-auto">
                <div style={{ height: 41 }}>
                    {toolbar}
                </div>

                <div className={classnames("flex-auto w-100 b--black-20 bt br bg-white overflow-auto", className)}>
                    {children}
                </div>
            </div>
        );
    }
}
