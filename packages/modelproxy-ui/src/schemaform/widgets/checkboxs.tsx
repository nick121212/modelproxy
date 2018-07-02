import schemaFormReact from "fx-schema-form-react";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import { fromJS, List } from "immutable";
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import React, { PureComponent } from "react";

import { isArray, isUndefined } from "../utils";

const { schemaFormTypes } = schemaFormReact;

export interface IProps extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}

export const widgetKey = "checkboxs";

/**
 * checkboxies多选框
 * 需要传入options作为可选项
 */
export class Widget extends PureComponent<IProps, any> {


    public render(): JSX.Element | null {
        const { getOptions, uiSchema, formItemMeta = fromJS({}), formItemData, updateItemData, validate } = this.props;
        const { readonly = false } = uiSchema || {};
        const metaOptions = formItemMeta ? formItemMeta.getIn(["options", schemaFormTypes.widget, widgetKey]) : fromJS({});
        const widgetOptions = getOptions(this.props, schemaFormTypes.widget, widgetKey, metaOptions);

        // 如果没有传入options，则返回null
        if (!uiSchema || !widgetOptions.options || !widgetOptions.options.options || !isArray(widgetOptions.options.options)) {
            return null;
        }

        return (
            <div className="flex flex-wrap mt2">
                {widgetOptions.options.options.map((opt: any, index: number) => {
                    return (
                        <Checkbox
                            className="mb2 mr2"
                            key={index}
                            disabled={readonly}
                            label={opt.text}
                            {...this.setDefaultProps(opt.key)}
                            onChange={async (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, checked?: boolean) => {
                                let formItemDataCalc = fromJS([]);

                                if (formItemData) {
                                    formItemDataCalc = formItemData
                                }

                                if (checked) {
                                    formItemDataCalc = formItemDataCalc.push(opt.key);
                                } else {
                                    const indexOfKey = this.findKeyOfIndex(opt.key);

                                    if (indexOfKey >= 0) {
                                        formItemDataCalc = formItemDataCalc.delete(indexOfKey);
                                    }
                                }
                                updateItemData(this.props, formItemDataCalc, await validate(this.props, formItemDataCalc.toJS()));
                            }}
                        />
                    );
                })}
            </div>
        );
    }

    private findKeyOfIndex(key: string): number {
        const { formItemData } = this.props;

        if (isUndefined(formItemData) || !List.isList(formItemData)) {
            return -1;
        }

        return (formItemData as List<any>).findLastIndex((val: any, k: number) => {
            return val === key;
        })
    }

    private setDefaultProps(key: any): any {
        const props: any = {};

        props.checked = this.findKeyOfIndex(key) >= 0;

        return props;
    }
}

export default {
    [widgetKey]: Widget
};
