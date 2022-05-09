---
nav:
  title: 组件
  path: /components
---

## NormalSearch 常规搜索

## 代码示例

```tsx
import React from 'react';
import { Button } from 'antd';
import { NormalSearch } from 'projbase';

const Demo = () => {
  const columns = [
    {
      label: '姓名',
      name: 'name',
      valueType: 'text',
    },
    {
      label: '年龄',
      name: 'age',
      valueType: 'select',
      valueData: [
        { key: 1, value: 1 },
        { key: 2, value: 2 },
      ],
    },
    {
      label: '住址',
      name: 'address',
      valueType: 'text',
    },
  ];
  const onSearch = values => {
    console.log('values:::::::', values);
  };

  const buttonRender = form => (
    <>
      <Button type="primary" htmlType="submit">
        查询
      </Button>
      <Button
        style={{ margin: '0 0 0 8px' }}
        onClick={() => {
          form.resetFields();
          onSearch();
        }}
      >
        重置
      </Button>
    </>
  );

  return (
    <NormalSearch
      columns={columns}
      onSearch={onSearch}
      buttonRender={buttonRender}
    />
  );
};

export default Demo;
```

## API

## columns

| 属性         | 说明           | 类型                                                | 默认值 |
| ------------ | -------------- | --------------------------------------------------- | ------ |
| valueType    | 搜索框标识     | string('date 日期', 'select 下拉框', 'text 输入框') | text   |
| name         | 搜索框 name    | string                                              | -      |
| label        | 搜索框 label   | string                                              | -      |
| buttonRender | 自定义组件按钮 | reatNode                                            | -      |
