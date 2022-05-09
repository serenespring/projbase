---
nav:
  title: 组件
  path: /components
---

## DescriptionsPro 描述信息

## 代码示例

```jsx
import React from 'react';
import { DescriptionsPro } from 'projbase';

export default () => {
  const columns = [
    {
      title: '姓名',
      key: 'name',
      dataIndex: 'name',
    },
    {
      title: '性别',
      key: 'sex',
      dataIndex: 'sex',
    },
    {
      title: '年龄',
      key: 'age',
      dataIndex: 'age',
    },
    {
      title: '住址',
      key: 'address',
      dataIndex: 'address',
    },
  ];
  const dataSource = {
    name: '张三',
    sex: '男',
    age: 18,
    address: '西安雁塔',
  };
  return <DescriptionsPro columns={columns} dataSource={dataSource} />;
};
```

## API

参考[antd.Descriptions](https://ant.design/components/descriptions-cn/)

| 属性       | 说明     | 类型   | 默认值 |
| ---------- | -------- | ------ | ------ |
| columns    | 描述信息 | array  | -      |
| dataSource | 数据     | object | -      |
