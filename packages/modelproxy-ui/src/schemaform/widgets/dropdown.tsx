import schemaFormReact from "fx-schema-form-react";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import { fromJS, List } from "immutable";
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import React, { PureComponent } from "react";
import { isNumber, isString, isUndefined } from "../utils";

const { schemaFormTypes } = schemaFormReact;

export interface IProps extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}

export const widgetKey = "dropdown";

export class Widget extends PureComponent<IProps, any> {


    public render(): JSX.Element | null {
        const { getOptions, uiSchema, getTitle, formItemMeta = fromJS({}), formItemData, updateItemData, removeItemData, validate } = this.props;
        const { readonly = false } = uiSchema || {};
        const metaOptions = formItemMeta ? formItemMeta.getIn(["options", schemaFormTypes.widget, widgetKey]) : fromJS({});
        const widgetOptions = getOptions(this.props, schemaFormTypes.widget, widgetKey, metaOptions);

        if (!uiSchema) {
            return null;
        }

        return (
            <Dropdown
                readOnly={readonly}
                placeHolder={getTitle(this.props)}
                onChanged={async (option: IDropdownOption, index?: number) => {

                    if (widgetOptions.options && widgetOptions.options.multiSelect) {
                        let formItemDataCalc = fromJS([]);

                        if (formItemData) {
                            formItemDataCalc = formItemData
                        }

                        if (option.selected) {
                            formItemDataCalc = formItemDataCalc.push(option.key);
                        } else {
                            const indexOfKey = this.findKeyOfIndex(option.key);

                            if (indexOfKey >= 0) {
                                formItemDataCalc = formItemDataCalc.delete(indexOfKey);
                            }
                        }
                        return updateItemData(this.props, formItemDataCalc, await validate(this.props, formItemDataCalc.toJS()));
                    }


                    if (option) {
                        updateItemData(this.props, option.key, await validate(this.props, option.key));
                    } else {
                        removeItemData(this.props);
                    }
                }}
                {...widgetOptions.options}
                {...this.setDefaultProps(widgetOptions)}
            />
        );
    }

    private findKeyOfIndex(key: string | number): number {
        const { formItemData } = this.props;

        if (isUndefined(formItemData) || !List.isList(formItemData)) {
            return -1;
        }

        return (formItemData as List<any>).findLastIndex((val: any, k: number) => {
            return val === key;
        })
    }

    private setDefaultProps(widgetOptions: any): any {
        const props: any = {};
        const { formItemData } = this.props;

        if (isUndefined(formItemData)) {
            return props;
        }

        if (widgetOptions.options && widgetOptions.options.multiSelect) {
            props.selectedKeys = [];
            if (List.isList(formItemData)) {
                props.selectedKeys = formItemData.toJS();
            }
        } else {
            props.selectedKey = null;

            if (isString(formItemData) || isNumber(formItemData)) {
                props.selectedKey = formItemData;
            }
        }

        return props;
    }
}

export default {
    [widgetKey]: Widget
};
