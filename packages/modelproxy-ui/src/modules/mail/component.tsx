import { Nav } from 'office-ui-fabric-react/lib/Nav';

import React, { PureComponent } from "react";

import classNames from 'classnames';
import { CommandBarButton } from 'office-ui-fabric-react/lib/Button';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

import { LightTheme, Link } from "../../fabric";
import { DashboardTestComponent } from './form';

export default class Component extends PureComponent<any, any>{
  public render() {
    return (
      <div className="flex w-100 h-100">
        <div className="flex flex-column" >
          <div>
            <Link
              normalTheme={LightTheme}
              width="auto"
              height={41}
              RootComponent={CommandBarButton}
              text='Send Mail'
              iconProps={{ iconName: 'Mail' }}
              className={classNames("bg-animate bg-transparent", "hover-bg-black-30")} />
          </div>

          <div style={{ width: 214 }} className="flex-auto h-100 overflow-auto bt br b--black-20 bg-white">
            <Nav
              theme={LightTheme}
              groups={[{
                links: [{
                  name: '收藏夹',
                  url: '',
                  links: [{
                    name: '收件箱',
                    url: '',
                    key: 'key1',
                    iconProps: {
                      iconName: 'Inbox',
                      className: "gray"
                    }
                  }, {
                    name: '草稿',
                    url: '',
                    key: 'key2',
                    iconProps: {
                      iconName: 'Edit',
                      className: "gray"
                    }
                  }, {
                    name: '存档',
                    url: '',
                    key: 'key3',
                    iconProps: {
                      iconName: "Archive",
                      className: "gray"
                    }
                  }],
                  isExpanded: true
                }, {
                  name: '文件夹',
                  url: '',
                  links: [{
                    name: '收件箱',
                    url: '',
                    key: 'key20',
                    iconProps: {
                      iconName: 'Inbox',
                      className: "gray"
                    }
                  }, {
                    name: '垃圾邮件',
                    url: '',
                    key: 'key21',
                    iconProps: {
                      iconName: 'Blocked',
                      className: "gray"
                    }
                  }, {
                    name: '草稿',
                    url: '',
                    key: 'key22',
                    iconProps: {
                      iconName: 'Edit',
                      className: "gray"
                    }
                  }, {
                    name: '已发送邮件',
                    url: '',
                    key: 'key23',
                    iconProps: {
                      iconName: 'Send',
                      className: "gray"
                    }
                  }, {
                    name: '已删除邮件',
                    url: '',
                    key: 'key24',
                    iconProps: {
                      iconName: 'Delete',
                      className: "gray"
                    }
                  }, {
                    name: '存档',
                    url: '',
                    key: 'key25',
                    iconProps: {
                      iconName: 'Archive',
                      className: "gray"
                    }
                  }],
                  isExpanded: true
                }]
              }]}
              expandedStateText={'expanded'}
              collapsedStateText={'collapsed'}
              selectedKey={'key3'}
            />
          </div>
        </div>

        <div className="flex flex-column shrink-0" style={{ width: 375 }}>
          <div>
            <Link
              normalTheme={LightTheme}
              width="auto"
              height={41}
              RootComponent={CommandBarButton}
              text='新建邮件'
              iconProps={{ iconName: 'Add' }}
              className={classNames("bg-animate bg-transparent", "hover-bg-black-30")} />
            <Link
              normalTheme={LightTheme}
              width="auto"
              height={41}
              RootComponent={CommandBarButton}
              text='修改邮件'
              iconProps={{ iconName: 'Edit' }}
              className={classNames("bg-animate bg-transparent", "hover-bg-black-30")} />
          </div>

          <div className="flex-auto flex-column justify-center items-center w-100 flex b--black-20 bt br bg-white">
            <Icon iconName="Mail" className="db f-6" />
            <div>
              邮件列表为空
            </div>
          </div>
        </div>

        <div className="flex flex-column flex-auto">
          <div>
            <Link
              normalTheme={LightTheme}
              width="auto"
              height={41}
              RootComponent={CommandBarButton}
              text='保存设置'
              iconProps={{ iconName: 'Add' }}
              className={classNames("bg-animate bg-transparent", "hover-bg-black-30")} />
          </div>

          <div className="flex-auto w-100 b--black-20 bt br pa5 bg-white overflow-auto">
            <DashboardTestComponent />
          </div>

        </div>
      </div>
    );
  }
}
