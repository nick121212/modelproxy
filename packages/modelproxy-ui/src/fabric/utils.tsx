import classNames from "classnames";
import { CommandBarButton } from "office-ui-fabric-react/lib/Button";

import { LightTheme } from "./themes";

export const getLinkItem = (text: string, iconName: string, onClick: () => any, extra: any = {}, size = 41, className = classNames("bg-animate bg-transparent", "hover-bg-black-30")) => {
    const res: any = Object.assign({
        normalTheme: LightTheme,
        width: "auto",
        height: size,
        onClick,
        RootComponent: CommandBarButton,
        text,
        // iconProps: { iconName },
        className
    }, extra);

    if (iconName) {
        res.iconProps = { iconName };
    }

    return res;
}