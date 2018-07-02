import React, { PureComponent } from "react";

import { ActionButton } from "office-ui-fabric-react/lib/Button";
import { Panel } from "../../../fabric";
import { IProps } from "../constants";
import { hoc } from "../container";
import { DashboardTestComponent } from "./form";

@(hoc as any)
export default class Component extends PureComponent<IProps, any>{
    public render() {
        const { setHeaderSettings, headerSettings = {} } = this.props;
        const { settings } = headerSettings;

        return (
            <Panel
                isOpen={settings}
                hostId="app-con"
                title="快速设置"
                className="header-80 h-100 overflow-auto"
                onDismiss={() => {
                    if (setHeaderSettings) {
                        setHeaderSettings({
                            settings: false
                        });
                    }
                }}>
                <div className="pa4 w-100 h-100 bg-white overflow-auto">

                    <DashboardTestComponent />

                    <ActionButton
                        data-automation-id='test'>
                        查看完整设置 >
                    </ActionButton>
                </div>
            </Panel>
        );
    }
}
