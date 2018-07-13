import React, { PureComponent } from "react";

import classNames from "classnames";
import { CommandBarButton } from 'office-ui-fabric-react/lib/Button';

import { getLinkItem, LightTheme, Link, LinkGroup } from "../../fabric";

export default class Component extends PureComponent<any, any>{
  public render() {
    console.log("nav", this.props);
    
    return (
      <div className="flex flex-column">
        <Link {...this.getLinkItem(false, "settings", "GlobalNavButton")} width={41} />

        <LinkGroup className="flex-column flex-auto overflow-auto bt br b--black-20 " isBottom={false} items={[
          getLinkItem("", "", undefined, {
            iconProps: { iconName: "Mail", className: "f4" }
          }),
          getLinkItem("", "", undefined, {
            iconProps: { iconName: "Calendar", className: "f4" }
          }),
          getLinkItem("", "", undefined, {
            iconProps: { iconName: "People", className: "f4" }
          }),
          getLinkItem("", "", undefined, {
            iconProps: { iconName: "Photo2", className: "f4" }
          }),
          getLinkItem("", "", undefined, {
            iconProps: { iconName: "Calendar", className: "f4" }
          })
        ]} />
      </div>
    );
  }

  /**
   * 生成button
   * @param   {boolean}     select
   * @param   {string}      key
   * @param   {string}      icon
   * @param   {JSX.Element} children
   * @returns {IButtonProps}
   */
  private getLinkItem(select: boolean = false, key: string, icon: string, children?: JSX.Element) {
    return {
      width: 40,
      RootComponent: CommandBarButton,
      normalTheme: LightTheme,
      children,
      // hoverClassName: "bg-white",
      iconProps: icon ? { iconName: icon, className: "f4" } : undefined,
      keepHover: select,
      onClick: () => {
        console.log("click");
      },
      className: classNames("bg-animate", { "bg-transparent hover-bg-black-30": !select })
    };
  }
}
