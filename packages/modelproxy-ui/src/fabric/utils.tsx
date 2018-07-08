import classNames from "classnames";
import { CommandBarButton } from "office-ui-fabric-react/lib/Button";

import { LightTheme } from "./themes";

export const getLinkItem = (
    text?: string,
    iconName?: string,
    onClick: () => any = () => void (0),
    extra: any = {},
    size = 41,
    className = classNames("bg-animate bg-transparent", "hover-bg-black-30")) => {
    const res: any = {
        normalTheme: LightTheme,
        width: "auto",
        height: size,
        onClick,
        children: null,
        RootComponent: CommandBarButton,
        // text,
        className
    };

    if (iconName) {
        res.iconProps = { iconName };
    }

    if (text) {
        res.text = text;
    }

    Object.assign(res, extra);

    return res;
}