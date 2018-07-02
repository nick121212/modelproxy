import React, { PureComponent } from "react";

import { IRectangle } from "@uifabric/utilities/lib";
import classNames from "classnames";
import { Icon, IIconStyles } from "office-ui-fabric-react/lib/Icon";
import { List } from "office-ui-fabric-react/lib/List";
import { PanelType } from "office-ui-fabric-react/lib/Panel";

import { DarkTheme, LightTheme, Link, Panel } from "../../../fabric";
import { IProps } from "../constants";
import { hoc } from "../container";

export const listItemStyle = { width: 77, height: 77, margin: 2 };
export const listIconStyles: IIconStyles = {
  root: {
    fontSize: 36
  }
}

@(hoc as any)
export default class Component extends PureComponent<IProps, any>{
  private columnCount: number = 0;
  private columnWidth: number = 0;
  private rowHeight = 80;

  public render() {
    const { setHeaderSettings, headerSettings = {} } = this.props;
    const { application } = headerSettings;

    return (
      <Panel
        isOpen={application}
        hostId="app-con"
        hasCloseButton={false}
        onDismiss={() => {
          if (setHeaderSettings) {
            setHeaderSettings({
              application: false
            });
          }
        }}
        type={PanelType.smallFixedNear}>
        <div className="pa1 w-100 h-100 bg-white">
          <List
            className="overflow-auto h-100"
            items={
              [{ "icon": "OutlookLogo", "name": "Outlook" },
              { "icon": "Calendar", "name": "日历" },
              { "icon": "People", "name": "人员" },
              { "icon": "Photo2", "name": "照片" },
              { "icon": "OneDrive", "name": "OneDrive", "color": "blue" },
              { "icon": "CheckboxComposite", "name": "任务" },
              { "icon": "WordLogo", "name": "Word", "color": "dark-blue" },
              { "icon": "ExcelLogo", "name": "Excel", "color": "dark-green" },
              { "icon": "PowerPointLogo", "name": "PowerPoint", "color": "dark-red" },
              { "icon": "OneNoteLogo", "name": "OneNote", "color": "purple" },
              { "icon": "SwayLogoInverse", "name": "Sway", "color": "dark-green" },
              { "icon": "SkypeLogo", "name": "Skype", "color": "light-blue" },
              { "icon": "OfficeLogo", "name": "Office", "color": "red" },
              { "icon": "BingLogo", "name": "必应", "color": "green" },
              { "icon": "MsnLogo", "name": "MSN" },
              { "icon": "Flow", "name": "Flow", "color": "blue" }]
            }
            getItemCountForPage={(itemIndex: number, surfaceRect: IRectangle): number => {
              if (itemIndex === 0) {
                this.columnCount = Math.ceil(surfaceRect.width / 90);
                this.columnWidth = Math.floor(surfaceRect.width / this.columnCount);
                this.rowHeight = this.columnWidth;
              }

              return this.columnCount * 90;
            }}
            getPageHeight={(itemIndex: number, surfaceRect: IRectangle) => {
              return this.rowHeight * 90;
            }}
            onRenderCell={(item: any, index: number | undefined) => {
              const color = item.color || "black";
              const hoverColor = `hover-bg-${color}`;

              return (
                <Link
                  normalTheme={LightTheme}
                  hoverTheme={DarkTheme}
                  width={77}
                  keepHover={true}
                  className={classNames("tc ma1 fl bg-near-white bg-animate", color, hoverColor)} >
                  <Icon className={classNames("dib h2 w2")} styles={listIconStyles} iconName={item.icon} />
                  <span className="f6 mt1 db">{item.name}</span>
                </Link>
              );
            }}
          />
        </div>
      </Panel>
    );
  }
}
