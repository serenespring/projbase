import 'antd/dist/antd.css';
import React, { useState } from 'react';
import {
  Form,
  Row,
  Col,
  Select,
  Input,
  Button,
  Table,
  Card,
  DatePicker,
} from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

const { Option } = Select;

const SearchTable = (props: any) => {
  const {
    columns = [],
    onSearch = () => {},
    dataSource = [],
    isRowSelection = false,
    actionRender = () => {},
    ...tableProps
  } = props;
  const [expand, setExpand] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [form] = Form.useForm();
  const searchColumns = columns.filter(
    (item: { isSearch: boolean }) => !(item.isSearch === false),
  );

  const getFields = () => {
    const newSearchColumns = expand
      ? searchColumns
      : searchColumns.length > 6
      ? searchColumns.slice(0, 6)
      : searchColumns;
    const children = [];
    for (let i = 0; i < newSearchColumns.length; i++) {
      switch (newSearchColumns[i].valueType) {
        case 'select':
          children.push(
            <Col span={8} key={i}>
              <Form.Item
                name={newSearchColumns[i]?.dataIndex}
                label={newSearchColumns[i]?.title}
              >
                <Select
                  placeholder={`请选择${newSearchColumns[i]?.title}`}
                  allowClear
                  showSearch
                  filterOption={(input, option) => {
                    const text = Array.isArray(option?.children)
                      ? option?.children.join()
                      : option?.children;
                    const newText = `${text}`;
                    return (
                      newText?.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    );
                  }}
                >
                  {newSearchColumns[i]?.valueData.map((item1: any) => (
                    <Option key={item1.key} value={item1.key}>
                      {item1.value}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>,
          );
          break;
        case 'date':
          children.push(
            <Col span={8} key={i}>
              <Form.Item
                name={newSearchColumns[i]?.dataIndex}
                label={newSearchColumns[i]?.title}
              >
                <DatePicker />
              </Form.Item>
            </Col>,
          );
          break;
        default:
          children.push(
            <Col span={8} key={i}>
              <Form.Item
                name={newSearchColumns[i]?.dataIndex}
                label={newSearchColumns[i]?.title}
              >
                <Input placeholder={`请输入${newSearchColumns[i]?.title}`} />
              </Form.Item>
            </Col>,
          );
      }
    }
    return children;
  };

  const onFinish = (values: {}) => {
    onSearch(values);
  };

  const onSelectChange = (selectedKeys: []) => {
    setSelectedRowKeys(selectedKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <Card>
      <Form
        form={form}
        name="advanced_search"
        className="ant-advanced-search-form"
        onFinish={onFinish}
      >
        <Row gutter={24}>{getFields()}</Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
            <Button
              style={{ margin: '0 0 0 8px' }}
              onClick={() => {
                form.resetFields();
                setSelectedRowKeys([]);
                onSearch();
              }}
            >
              重置
            </Button>
            <a
              style={{ fontSize: 12 }}
              onClick={() => {
                setExpand(!expand);
              }}
            >
              {searchColumns.length > 6 ? (
                <>
                  {expand ? <UpOutlined /> : <DownOutlined />}{' '}
                  {expand ? '收起' : '展开'}
                </>
              ) : (
                ''
              )}
            </a>
          </Col>
        </Row>
      </Form>
      <div style={{ marginTop: '20px' }}>
        <div style={{ textAlign: 'right' }}>
          {actionRender(selectedRowKeys)}
        </div>
        {isRowSelection ? (
          <Table
            columns={columns}
            dataSource={dataSource}
            rowSelection={rowSelection}
            pagination={{ position: ['bottomCenter'] }}
            {...tableProps}
          />
        ) : (
          <Table
            columns={columns}
            dataSource={dataSource}
            pagination={{ position: ['bottomCenter'] }}
            {...tableProps}
          />
        )}
      </div>
    </Card>
  );
};

export default SearchTable;
