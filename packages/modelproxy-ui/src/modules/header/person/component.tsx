import React, { PureComponent } from "react";

import { ActionButton } from "office-ui-fabric-react/lib/Button";
import { Persona, PersonaInitialsColor, PersonaPresence, PersonaSize } from "office-ui-fabric-react/lib/Persona";
import { Panel } from "../../../fabric";
import { IProps } from "../constants";
import { hoc } from "../container";

@(hoc as any)
export default class Component extends PureComponent<IProps, any>{
    public render() {
        const { setHeaderSettings, headerSettings = {} } = this.props;
        const { person } = headerSettings;

        return (
            <Panel
                isOpen={person}
                hostId="app-con"
                title="我的账户"
                className="header-80"
                onDismiss={() => {
                    if (setHeaderSettings) {
                        setHeaderSettings({
                            person: false
                        });
                    }
                }}>
                <div className="pa4 w-100 h-100 bg-white flex flex-column">
                    <Persona
                        presence={PersonaPresence.online}
                        size={PersonaSize.size32}
                        className="mb4"
                        initialsColor={PersonaInitialsColor.purple}
                        text="封晓"
                    />

                    <ActionButton
                        data-automation-id='test'>
                        编辑个人资料
                    </ActionButton>

                    <ActionButton
                        data-automation-id='test'>
                        查看账户
                    </ActionButton>

                    <ActionButton
                        data-automation-id='test'>
                        注销
                    </ActionButton>
                </div>
            </Panel>
        );
    }
}
