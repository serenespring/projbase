/**
 * 封装Button
 * @author: serenespring
 * @since: 2022-01-09
 */

import 'antd/dist/antd.css';
import React, { useState } from 'react';
import { Form, Row, Col, Select, Input, Card, DatePicker } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

const { Option } = Select;

const NormalSearch = (props: any) => {
  const [expand, setExpand] = useState(false);
  const { columns, onSearch = () => {}, buttonRender = () => {} } = props;
  const [form] = Form.useForm();
  const getFields = () => {
    const newColumns = expand
      ? columns
      : columns.length > 6
      ? columns.slice(0, 6)
      : columns;
    const children = [];
    for (let i = 0; i < newColumns.length; i++) {
      switch (newColumns[i].valueType) {
        case 'select':
          children.push(
            <Col span={8} key={i}>
              <Form.Item
                name={newColumns[i]?.name}
                label={newColumns[i]?.label}
              >
                <Select
                  placeholder={`请选择${newColumns[i]?.label}`}
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
                  {newColumns[i]?.valueData.map((item1: any) => (
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
                name={newColumns[i]?.name}
                label={newColumns[i]?.label}
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
                name={newColumns[i]?.name}
                label={newColumns[i]?.label}
              >
                <Input placeholder={`请输入${newColumns[i]?.label}`} />
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
            {buttonRender(form)}
            <a
              style={{ fontSize: 12 }}
              onClick={() => {
                setExpand(!expand);
              }}
            >
              {columns.length > 6 ? (
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
    </Card>
  );
};
export default NormalSearch;
