import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import React, { PureComponent } from "react";

export interface IProps extends DefaultProps, UtilsHocOutProps {
}

export const tempKey = "none";

export class Temp extends PureComponent<IProps> {
    public render(): any {
        const { children } = this.props;

        return <div>
            {children}
        </div>;
    }
}

export default {
    [tempKey]: Temp
};
