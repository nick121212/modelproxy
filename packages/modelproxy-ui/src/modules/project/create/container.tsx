import schemaFormReact from "fx-schema-form-react";
import Immutable from "immutable";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose, defaultProps, lifecycle, withHandlers } from "recompose";

import { curAjv } from "../../../schemaform";
import { IProps, proxySettings, reducerKeys } from "./constants";
import { confirmRed, saveDataRed } from "./redux";

const mapStateToProps = (state: Immutable.Map<string, any>, ownProps: IProps) => {
    return {
        createResData: state.getIn([...reducerKeys, "createResData"]),
        confirmData: state.getIn([...reducerKeys, "confirmData"]),
    };
};

export const hoc = compose<IProps, any>(
    withRouter,
    connect(mapStateToProps),
    withHandlers({
        saveData: () => {
            return async (data: any) => {
                console.log(data);

                const action: any = await saveDataRed.actions.execute({
                    settings: {
                        timeout: 10000
                    },
                    data
                }, Object.assign({ func: "post" }, proxySettings.project));

                console.log(action);
            }
        },
        toggleConfirm: () => {
            return (comfirm?: boolean) => {
                confirmRed.actions.confirm({
                    confirm: !comfirm,
                    item: null
                });
            };
        },
        loadingConfirm: () => {
            return (loading: boolean) => {
                confirmRed.actions.loading(loading);
            };
        }
    }),
    defaultProps({
        ajv: curAjv,
        schemaId: "project",
        reducerKey: "schemaForm",
        formKey: "project",
        shouldResetForm: true,
        initData: {}
    }),
    schemaFormReact.hocFactory.get("asyncSchema"),
    schemaFormReact.schemaFormDec({
        rootReducerKey: ["schemaForm"],
        parentKeys: ["project"]
    }),
    lifecycle<any, any>({
        // componentDidMount() {

        // }
    })
);
