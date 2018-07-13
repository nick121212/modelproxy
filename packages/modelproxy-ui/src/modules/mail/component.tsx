// import { Nav } from "office-ui-fabric-react/lib/Nav";
import classNames from "classnames";
import { CommandBarButton } from "office-ui-fabric-react/lib/Button";
import React, { PureComponent } from "react";
// import { Icon } from "office-ui-fabric-react/lib/Icon";

import { LightTheme, Link } from "../../fabric";
import { DashboardTestComponent } from "./form";

export default class Component extends PureComponent<any, any>{
  public render() {

    return (
      <div className="flex w-100 h-100">
        <div className="flex flex-column flex-auto">
          <div>
            <Link
              normalTheme={LightTheme}
              width="auto"
              height={41}
              RootComponent={CommandBarButton}
              text="保存设置"
              iconProps={{ iconName: "Add" }}
              className={classNames("bg-animate bg-transparent", "hover-bg-black-30")} />
          </div>

          <div className="flex-auto w-100 b--black-20 bt br pa5 bg-white overflow-auto">
            <DashboardTestComponent key="form"/>
          </div>

        </div>
      </div>
    );
  }
}
