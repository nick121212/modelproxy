import { ActionButton, IconButton } from "office-ui-fabric-react/lib/Button";
import { Callout, ICalloutProps } from "office-ui-fabric-react/lib/Callout";
// import { FocusTrapZone } from "office-ui-fabric-react/lib/FocusTrapZone";
import { ISearchBoxProps } from "office-ui-fabric-react/lib/SearchBox";
import { TextField } from "office-ui-fabric-react/lib/TextField";

import classNames from "classnames";
import React, { HtmlHTMLAttributes, PureComponent } from "react";

export interface IProps extends HtmlHTMLAttributes<HTMLDivElement> {
  searchProps?: ISearchBoxProps;
  calloutProps?: ICalloutProps;

  searchText?: string;
  focused?: boolean;
  focusClassName?: string;
}

export interface IState {
  showResult: boolean;
  focused: boolean;
  searchText: string;
}

export default class Component extends PureComponent<IProps, IState>{
  private searchElement: HTMLDivElement | null;
  private inputElement: TextField | null;

  constructor(props: IProps, state: IState) {
    super(props, state);

    this.state = {
      focused: !!props.focused,
      showResult: false,
      searchText: props.searchText || ""
    };
  }

  public render() {
    const { focused: f1, searchText: f2, className, focusClassName, searchProps, calloutProps, ...extraProps } = this.props;
    const { showResult, searchText, focused } = this.state;

    return (
      <div ref={($ref) => { this.searchElement = $ref; }}
        className={classNames(className, focused ? focusClassName : "")}
        {...extraProps}>

        <div style={{ height: 35 }} className={classNames("flex flex-rows items-center")}>
          <IconButton
            onClick={() => {
              if (focused) {
                this.toggleFocus(false, "");
                return;
              }
              this.toggleFocus(true);
            }}
            iconProps={{ iconName: focused ? "Back" : "Search" }}
            title="搜索"
            ariaLabel="搜索"
          />
          <TextField
            ref={(input: TextField) => { this.inputElement = input; }}
            value={searchText}
            placeholder="搜索"
            onBlur={() => {
              if (!searchText) {
                this.toggleFocus(false);
              }
            }}
            onChanged={
              (val: any) => {
                this.toggleFocus(true, val);
              }
            } className="flex-auto bn" borderless={true} />
          {
            focused ?
              <ActionButton
                text='所有文件夹'
                menuProps={{
                  shouldFocusOnMount: true,
                  items: [
                    {
                      key: 'Later Today',
                      iconProps: {
                        iconName: 'Clock'
                      },
                      checked: true,
                      canCheck: true,
                      name: 'Later Today',
                      secondaryText: '7:00 PM'
                    },
                    {
                      key: 'Tomorrow',
                      iconProps: {
                        iconName: 'Coffeescript'
                      },
                      checked: false,
                      canCheck: true,
                      name: 'Tomorrow',
                      secondaryText: 'Thu. 8:00 AM'
                    },
                    {
                      key: 'This Weekend',
                      iconProps: {
                        iconName: 'Vacation'
                      },
                      checked: false,
                      canCheck: true,
                      name: 'This Weekend',
                      secondaryText: 'Sat. 10:00 AM'
                    },
                    {
                      key: 'Next Week',
                      iconProps: {
                        iconName: 'Suitcase'
                      },
                      checked: false,
                      canCheck: true,
                      name: 'Next Week',
                      secondaryText: 'Mon. 8:00 AM'
                    },
                  ]
                }
                }
              /> : null
          }
          {(focused && searchText) ? <IconButton
            onClick={() => {
              this.toggleFocus(false, "");
            }}
            iconProps={{ iconName: "Clear" }}
            title="清除文本"
            ariaLabel="清除文本"
          />
            : null}
        </div>

        {
          showResult ? <Callout
            role={"searchResultDialog"}
            ariaLabelledBy={"searchResultDialog"}
            className="ms-CalloutExample-callout"
            gapSpace={0}
            target={this.searchElement}
            onDismiss={() => { this.onDismiss(); }}
            setInitialFocus={true}
            {...calloutProps}/> : null
        }

      </div >
    );
  }

  private onDismiss() {
    this.setState({
      showResult: false
    });
  }

  private toggleFocus(focused: boolean, searchText?: string) {
    // if (focused && searchText === "") {

    if (focused && this.inputElement) {
      this.inputElement.focus();
    }

    this.setState({
      focused,
      searchText: searchText || ""
    });
    // }

  }
}
