---
nav:
  title: 组件
  path: /components
---

## IconPro 图标

- 根据 iconfont 图标库封装

## 代码示例

```tsx
import React from 'react';
import { IconPro } from 'projbase';

export default () => (
  <IconPro
    type="icon-xiazai"
    scriptUrl="//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
  />
);
```

## API

| 属性      | 说明                                    | 类型   | 默认值 |
| --------- | --------------------------------------- | ------ | ------ |
| type      | 图标名字                                | string | -      |
| scriptUrl | iconfont 图标库 Symbol 模式下得 js 链接 | string | -      |
