
import React, { PureComponent } from "react";

import { Route } from "react-router-dom";

import { Component as CreateCompnent } from "./create";
import { Component as ListComponent } from "./list";

export default class Component extends PureComponent<any, any>{
  public render() {
    const { match } = this.props;

    return (
      <div className="flex w-100 h-100">
        <div className="flex flex-column shrink-0" style={{ width: 375 }}>
          <ListComponent />
        </div>

        <Route path={`${match.path}/create`} component={CreateCompnent} />

      </div>
    );
  }
}
