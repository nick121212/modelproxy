import classNames from "classnames";
import { CommandBarButton } from "office-ui-fabric-react/lib/Button";
import { Persona, PersonaInitialsColor, PersonaPresence, PersonaSize } from "office-ui-fabric-react/lib/Persona";
import React, { PureComponent } from "react";
import { ImmutableLoadingBar as LoadingBar } from "react-redux-loading-bar";

import { DarkTheme, LightTheme, LinkGroup, SearchBox } from "../../fabric";
import { IProps } from "./constants";
import { hoc } from "./container";
import { IHeaderSettings } from "./reducer";

@(hoc as any)
export default class Component extends PureComponent<IProps, any>{

  public render() {
    const { headerSettings = {} } = this.props;
    const { application, feature, person, help, settings } = headerSettings;

    return (
      <header className="header w-100 overflow-hidden">
        <LoadingBar />
        <div className="menubar flex flex-row">

          {/** 左边按钮和title区域 */}
          <div className="flex" style={{ width: 262 }}>
            <LinkGroup items={[this.getLinkItem(application, "application", "Waffle"), {
              theme: DarkTheme,
              width: "auto",
              className: "ml3 b",
              children: "ModelProxy"
            }]} />
          </div>

          {/** 中间的搜索框区域 */}
          <div className="flex-auto flex items-center ml2 mr2">
            <SearchBox
              focused={true}
              focusClassName="w-100"
              searchText={"hello world"}
              className="bg-white ba w5 br3 mr3 overflow-hidden"
              searchProps={{
                className: "bn bg-lighter-gray",
                theme: LightTheme
              }}
            />
          </div>

          {/** 右边按钮区域 */}
          <div className="flex items-center">
            <LinkGroup items={[
              this.getLinkItem(settings, "settings", "Settings"),
              this.getLinkItem(feature, "feature", "Lightbulb"),
              this.getLinkItem(help, "help", "Help"),
              this.getLinkItem(person, "person", "", <Persona
                presence={PersonaPresence.online}
                imageShouldFadeIn={true}
                hidePersonaDetails={true}
                size={PersonaSize.size32}
                className="w1 center"
                initialsColor={PersonaInitialsColor.purple}
                text="晓"
              />)]} />
          </div>
        </div>

      </header>
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
      width: 48,
      RootComponent: CommandBarButton,
      normalTheme: DarkTheme,
      hoverTheme: LightTheme,
      children,
      hoverClassName: "bg-white",
      iconProps: icon ? { iconName: icon, className: "f4" } : undefined,
      keepHover: select,
      onClick: () => {
        this.toggleHeaderItem({
          [key]: !select
        });
      },
      className: classNames("bg-animate", { "bg-transparent hover-bg-black": !select })
    };
  }

  /**
   * 更改按钮的选中状态
   * @param   {IHeaderSettings} s
   */
  private toggleHeaderItem(s: IHeaderSettings): void {
    const { setHeaderSettings } = this.props;

    if (setHeaderSettings) {
      setHeaderSettings(s);
    }
  }
}
