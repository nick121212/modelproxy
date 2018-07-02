// import classNames from "classnames";
import { Label } from "office-ui-fabric-react/lib/Label";
import { IPanelProps, Panel, PanelType } from "office-ui-fabric-react/lib/Panel";
import React, { PureComponent } from "react";

export interface IProps extends IPanelProps {
  title?: string;
  hostId: string;
}

/**
 * 拦截Link组件，劫持onMouseOver和onMouseOut事件
 */
export default class Component extends PureComponent<IProps>{
  public render() {
    const { children, title, ...extraProps } = this.props;

    return (
      <Panel
        isHiddenOnDismiss={true}
        hasCloseButton={true}
        isLightDismiss={true}
        isBlocking={true}
        isFooterAtBottom={true}
        headerText=""
        type={PanelType.smallFixedFar}
        layerProps={{
          hostId: "app-con"
        }}
        onRenderNavigation={(props: any, defaultRender: (props?: any) => JSX.Element | null) => {
          if (!title) {
            return defaultRender(props);
          }
          return (
            <div className="flex pa4">
              <div className="flex-auto flex items-center">
                <Label className="f4">{title || "面板"}</Label>
              </div>
              <div>
                {defaultRender(props)}
              </div>
            </div>
          );
        }}
        onRenderBody={(props?: IPanelProps, defaultRender?: (props?: IPanelProps) => JSX.Element | null): JSX.Element | null => {
          return children as JSX.Element;
        }}
        {...extraProps} />
    );
  }
}
