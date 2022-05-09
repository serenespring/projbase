---
nav:
  title: 组件
  path: /components
---

## ButtonPro 按钮

- 在 antd.Button 组件基础上封装, type 属性值增加`delete`, 删除按钮弹窗确认框
- 兼容[antd.Button](https://ant.design/components/button-cn/)组件

## 代码示例

```tsx
import React from 'react';
import { ButtonPro } from 'projbase';

export default () => (
  <ButtonPro type="delete" onClick={() => message.success('删除成功')}>
    删除
  </ButtonPro>
);
```

<style>
.ant-popover-message {
  min-width: 200px;
  padding-bottom: 30px;
}
</style>

对按钮进行二次封装

## API

| 属性 | 说明                 | 类型   | 默认值 |
| ---- | -------------------- | ------ | ------ |
| type | 新增属性值为`delete` | string | -      |
