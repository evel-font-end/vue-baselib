# @efont/Vue-baselib 

> Vue大屏项目组件库

## 结构说明
  - src/server api接口服务目录
  - src/components/cell 组件单元目录
  - src/components/pages 组件类预览页面目录
  - static/mock 组件数据源(json假数据)

## 组件通用属性说明
echart属性与外部属性options对象深度合并

## 组件通用方法说明

## 文档
  各类别组件编写规范，请见static/md下各组件类文件夹下README.md

## 预览
https://evel-font-end.github.io/vue-baselib/dist/

## Build Setup

``` bash
node: 14.16.0
npm: 8.1.1
# install dependencies
npm install
 
# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 发包步骤
```bash
# 更新 node 版本到 14.18.0 以上
# 然后升级 npm 的版本到最新
nvm use 16.13.0
npm install -g npm@latest

# 切换源回 npm源
npm config set registry=http://registry.npmjs.org

# 项目打包
npm run build
npm run build:vue-baselib

# 注册 npm <https://www.npmjs.com/>账号密码，并在命令行进行登录
npm adduser

# 检测是否登陆成功
npm who am i

# 版本号格式：主版本号.次版本号.修订号
# 版本号递增规则：
#  - 主版本号：做了不兼容修改或颠覆式的重写
#  - 次版本号：向下兼容的功能性新增
#  - 修订号：向下兼容的问题修正
#  大版本为 1.0.0，小版本是0.1.0，小修复是0.0.1
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=<prerelease-id>]

# 发布@efont/vue-baselib
npm publish --access public
```

