# 扁鹊

## 依赖

- normalizr
- quicktype
- graphql
- express
- routing-controllers
- typescript
- inversify
- modelproxy
- modelproxy-engine-fetch

## 项目结构说明

```txt
config                           # 配置文件位置
|--- default.json                # 默认的配置
|--- production.json             # 生产环境的配置
dist                             # 编译的文件
src                              # 源码位置
|--- controller                  # 路由
|--- decorator                   # 装饰器
|--- entity                      # 数据库模型
|--- interceptor                 # 包装器
|--- middleware                  # 中间件
|--- service                     # 服务
|--- utils                       # 工具文件
|--- index.ts                    # 启动文件
|--- container.ts                # 依赖注入配置文件
ormconfig.json                   # 数据库配置文件
ormconfig.production.json        # 生产环境数据库配置文件
```

## 编译启动

需要安装mysql数据库并建立默认的数据库[modelproxy]。

安装依赖

```shell
npm i
```

编译

```shell
tsc -d -w
```

启动

```shell
node dist
```
