import React, { PureComponent } from "react";

import { Panel } from "../../../fabric";
import { IProps } from "../constants";
import { hoc } from "../container";

@(hoc as any)
export default class Component extends PureComponent<IProps, any>{
    public render() {
        const { setHeaderSettings, headerSettings = {} } = this.props;
        const { help } = headerSettings;

        return (
            <Panel
                isOpen={help}
                hostId="app-con"
                title="帮助"
                className="header-80"
                onDismiss={() => {
                    if (setHeaderSettings) {
                        setHeaderSettings({
                            help: false
                        });
                    }
                }}>
                <div className="pa4 w-100 h-100 bg-white flex flex-column">
                    帮助列表                    
                </div>
            </Panel>
        );
    }
}
