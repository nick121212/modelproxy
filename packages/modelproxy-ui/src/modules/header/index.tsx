import React from "react";

import { default as Application } from "./application";
import { default as Header } from "./component";
import { default as Feature } from "./feature";
import { default as Help } from "./help";
import { default as Person } from "./person";
import { default as Settings } from "./settings";

import "./header.css";

export { settings } from "./redux";

export const Component = () => {
    return <>
        <Header key="header" />
        <Person key="person" />
        <Settings key="settings" />
        <Help key="help" />
        <Feature key="feature" />
        <Application key="application" />
    </>;
};