import { ITheme } from "@uifabric/styling/lib";
import classNames from "classnames";
import { IButtonProps } from "office-ui-fabric-react/lib/Button";
import { Link } from "office-ui-fabric-react/lib/Link";
import React, { PureComponent } from "react";

import { LightTheme } from "../themes";

export interface IProps extends IButtonProps {
  /**
   * 默认的样式
   */
  normalTheme?: ITheme;
  /**
   * hover时候的样式
   */
  hoverTheme?: ITheme;
  /**
   * 当前为hover样式标志
   */
  keepHover?: boolean;
  /**
   * hover时候的className
   */
  hoverClassName?: string;
  /**
   * 宽度
   */
  width?: number | string;
  /**
   * 高度
   */
  height?: number | string;
  /**
   * 根组件
   */
  RootComponent?: any;
}

// const defaultTheme = getTheme();

/**
 * 拦截Link组件，劫持onMouseOver和onMouseOut事件
 */
export default class Component extends PureComponent<IProps>{
  public render() {
    const { children, width = "", RootComponent, height, keepHover, hoverClassName = "", className, normalTheme, hoverTheme, ...extraProps } = this.props;
    const RootComponentCalc = RootComponent || Link;
    let style: any = {
      width: width as string,
      height: height || width
    };
    let theme = normalTheme;

    if (keepHover) {
      theme = hoverTheme;
    }

    if (!width) {
      style = {};
    }

    return (
      <RootComponentCalc
        className={classNames(className, { [hoverClassName]: keepHover })}
        theme={theme || LightTheme}
        style={style}
        {...extraProps}>
        {children}
      </RootComponentCalc>
    );
  }
}
