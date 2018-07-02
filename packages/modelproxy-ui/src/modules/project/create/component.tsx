import classNames from "classnames";
import schemaFormReact from "fx-schema-form-react";
import { Button, PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { Dialog, DialogType } from "office-ui-fabric-react/lib/Dialog";
import React from "react";

import { DarkTheme, getLinkItem, LinkGroup, MainPanel } from "../../../fabric";
import { curAjv } from "../../../schemaform";
import { globalOptions } from "../../../schemaform/options/default";
import { IProps } from "./constants";
import { hoc } from "./container";

const { SchemaForm } = schemaFormReact;

export class Component extends React.PureComponent<IProps, any> {

    public render() {
        const { parentKeys, schemaId, validateAll, resetForm, confirmData, toggleConfirm, saveData } = this.props;
        const { confirm = false, loading = false } = confirmData ? confirmData.toJS() : {};

        if (!this.props.root || !validateAll || !resetForm || !toggleConfirm || !saveData) {
            return null;
        }

        return <>
            <MainPanel className="pa4" toolbar={
                <LinkGroup items={[
                    getLinkItem("保存项目", "Save", async () => {
                        const { data: dataRaw, isValid: isValidRaw } = await validateAll();

                        if (isValidRaw) {
                            saveData(dataRaw);
                        }
                    }),
                    getLinkItem("重置更改", "Undo", () => {
                        toggleConfirm(confirm);
                    })
                ]} />
            }>
                <Dialog
                    theme={DarkTheme}
                    isOpen={confirm}
                    title="重置更改"
                    subText="重置后，填写的数据会被清除！"
                    type={DialogType.close}
                    isBlocking={true}
                    onDismiss={() => {
                        toggleConfirm(true);
                    }}>
                    <LinkGroup className="flex-column" items={[
                        getLinkItem("重置", "", async () => {
                            resetForm();
                            toggleConfirm(true);
                        }, {
                                width: null,
                                disabled: loading,
                                RootComponent: PrimaryButton,
                                className: classNames("w-100 db mb3")
                            }),
                        getLinkItem("取消", "", async () => {
                            toggleConfirm(true);
                        }, {
                                width: null,
                                disabled: loading,
                                RootComponent: Button,
                                className: classNames("w-100 db")
                            }),
                    ]} />
                </Dialog>

                <SchemaForm
                    schemaId={schemaId}
                    uiSchemas={["*"]}
                    parentKeys={parentKeys}
                    globalOptions={globalOptions}
                    ajv={curAjv} />
            </MainPanel>
        </>;
    }
}

export default hoc(Component as any);
