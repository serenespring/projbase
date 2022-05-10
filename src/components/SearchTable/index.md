---
nav:
  title: 组件
  path: /components
---

## SearchTable 搜索表格

## 代码示例

```tsx
import React, { useState } from 'react';
import { Button } from 'antd';
import { SearchTable } from 'projbase';

const columns = [
  {
    title: '序号',
    dataIndex: 'index',
    key: 'index',
    isSearch: false,
    render: (text, record, index) => index + 1,
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    valueType: 'text',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    valueType: 'select',
    valueData: [
      { key: 1, value: 1 },
      { key: 2, value: 2 },
    ],
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
    valueType: 'text',
    isSearch: false,
  },
];

const dataSource = () => {
  const data = [];
  for (let i = 0; i < 89; i++) {
    data.push({
      id: i,
      name: `张三${i}`,
      age: 16 + i,
      address: '西安雁塔',
    });
  }
  return data;
};

export default () => {
  const [data, setData] = useState(dataSource);
  const onSearch = (value) => {
    console.log('value:::', value);
  };
  const onChange = (pagination) => {
    console.log('pagination:::', pagination);
  };
  return (
    <SearchTable
      rowKey="id"
      columns={columns}
      dataSource={data}
      onSearch={onSearch}
      onChange={onChange}
      buttonRender={(form, reset) => [
        <>
          <Button type="primary" htmlType="submit">
            查询
          </Button>
          <Button
            style={{ margin: '0 0 0 8px' }}
            onClick={() => {
              reset();
              onSearch();
            }}
          >
            重置
          </Button>
        </>,
      ]}
    />
  );
};
```

## 可选行搜索表格

```tsx
import React, { useState } from 'react';
import { Button } from 'antd';
import { SearchTable } from 'projbase';

const columns = [
  {
    title: '序号',
    dataIndex: 'index',
    key: 'index',
    isSearch: false,
    render: (text, record, index) => index + 1,
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    valueType: 'text',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    valueType: 'select',
    valueData: [
      { key: 1, value: 1 },
      { key: 2, value: 2 },
    ],
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
    valueType: 'text',
    isSearch: false,
  },
];

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

export default () => {
  const [data, setData] = useState(dataSource);
  const onSearch = (value) => {
    console.log('value:::', value);
  };
  const doExport = (selectedKeys) => {
    console.log('selectedKeys:::', selectedKeys);
  };
  return (
    <SearchTable
      rowKey="id"
      columns={columns}
      dataSource={data}
      onSearch={onSearch}
      isRowSelection
      buttonRender={(form, reset) => [
        <>
          <Button type="primary" htmlType="submit">
            查询
          </Button>
          <Button
            style={{ margin: '0 0 0 8px' }}
            onClick={() => {
              reset();
              onSearch();
            }}
          >
            重置
          </Button>
        </>,
      ]}
      actionRender={(selectedRowKeys) => [
        <Button
          key="out"
          onClick={() => {
            doExport(selectedRowKeys);
          }}
        >
          导出
        </Button>,
      ]}
    />
  );
};
```

## API

## searchtable

| 属性           | 说明                                      | 类型                               | 默认值 |
| -------------- | ----------------------------------------- | ---------------------------------- | ------ |
| rowKey         | 表格行 key 的取值，可以是字符串或一个函数 | string \| function(record): string | `key`  |  |
| columns        | 表格行和搜索行                            | array                              | -      |
| dataSource     | 表格数据                                  | array                              | -      |
| isRowSelection | 可选表格数据                              | boolean                            | -      |
| isExport       | 可否导出                                  | boolean                            | -      |
| onSearch       | 搜索框数据                                | function                           | -      |
| isRowSelection | 表格行是否可选                            | boolean                            | -      |
| actionRender   | 操作信息                                  | function                           | -      |
| buttonRender   | 自定义组件按钮                            | reatNode                           | -      |

## columns

以下为新增属性，其余可参考[antd table](https://ant.design/components/table-cn/) 属性

| 属性      | 说明                                     | 类型                                                | 默认值                                   |
| --------- | ---------------------------------------- | --------------------------------------------------- | ---------------------------------------- |
| valueType | 搜索框标识                               | string('date 日期', 'select 下拉框', 'text 输入框') | text                                     |
| valueData | valueType 为 select 时的下拉框值         | array                                               | 默认不传该属性，搜索框标识为 select 时传 |
| isSearch  | isSearch 为 false 时无此所搜索，默认显示 | boolean                                             | -                                        |
