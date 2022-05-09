---
nav:
  title: 组件
  path: /components
---

## EditTable 可编辑表格

- 基于 antd.Table 组件基础上封装

## 代码示例

```tsx
import React from 'react';
import { EditTable } from 'projbase';

export default () => {
  const dataSource = [
    {
      id: 1,
      name: '张三',
      age: 16,
      address: '西安雁塔',
    },
    {
      id: 2,
      name: '李四',
      age: 25,
      address: '西安长安',
    },
    {
      id: 3,
      name: '王五',
      age: 33,
      address: '西安碑林',
    },
  ];
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      editable: true,
    },
  ];
  const handleTableSave = (value) => {
    console.log('value::::::', value);
  };
  const geterrInfo = (errInfo) => {
    console.log('errInfo::::::', errInfo);
  };
  return (
    <EditTable
      dataSource={dataSource}
      columns={columns}
      handleSave={(data) => {
        handleTableSave(data);
      }}
      rowKey="id"
      geterrInfo={geterrInfo}
      getEditingKey={(key) => {
        console.log('key::::', key);
      }}
    />
  );
};
```

## API

属性参考[ant.table](https://ant.design/components/table-cn/#components-table-demo-edit-row)

| 属性          | 说明                                        | 类型                               | 默认值 |
| ------------- | ------------------------------------------- | ---------------------------------- | ------ |
| dataSource    | 数据数组                                    | object[]                           | -      |
| columns       | 表格列的配置描述                            | object[]                           | -      |
| rowKey        | 表格行 `key` 的取值，可以是字符串或一个函数 | string \| function(record): string | `key`  |
| handleSave    | 表格行保存函数                              | function                           | -      |
| geterrInfo    | 表格行编辑错误信息                          | function                           | -      |
| getEditingKey | 表格行编辑主键                              | function                           | -      |
