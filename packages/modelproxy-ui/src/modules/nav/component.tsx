import React, { PureComponent } from "react";

import classNames from 'classnames';
import { CommandBarButton } from 'office-ui-fabric-react/lib/Button';

import { LightTheme, Link, LinkGroup } from "../../fabric";

export default class Component extends PureComponent<any, any>{
  public render() {
    return (
      <div className="flex flex-column">
        <Link {...this.getLinkItem(false, "settings", "GlobalNavButton")} width={41}/>

        <LinkGroup className="flex-column flex-auto overflow-auto bt br b--black-20 " isBottom={false} items={[
          this.getLinkItem(false, "settings", "Mail"),
          this.getLinkItem(false, "feature", "Calendar"),
          this.getLinkItem(false, "help", "People"),
          this.getLinkItem(false, "help", "Photo2"),
          this.getLinkItem(false, "help", "CheckboxComposite")
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
