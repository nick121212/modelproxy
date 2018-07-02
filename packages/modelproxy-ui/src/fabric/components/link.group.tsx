import classNames from "classnames";
import React, { PureComponent } from "react";

import { default as Link, IProps as LinkProps } from "./link";

export interface IProps {
  items: LinkProps[];
  isBottom?: boolean;
  className?: string;
}

/**
 * 拦截Link组件，劫持onMouseOver和onMouseOut事件
 */
export default class Component extends PureComponent<IProps>{
  public render() {
    const { children, className, isBottom = true, items = [] } = this.props;

    return (
      <div className={classNames("flex w-100", className)}>
        {!isBottom ? <div className="flex-auto">{children}</div> : null}
        {
          items.map((item: any, idx: number) => {
            return <Link
              key={idx}
              className={"bg-animate bg-transparent hover-bg-black-30"}
              {...item} />
          })
        }
        {isBottom ? <div className="flex-auto">{children}</div> : null}
      </div>
    );
  }
}
