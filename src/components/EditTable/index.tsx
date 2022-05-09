import React, { useState, useEffect } from 'react';
import { Table, Input, InputNumber, Form, Typography } from 'antd';
// import './index.less';

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text';
  record: any;
  index: number;
  children: React.ReactNode;
}
const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `请输入${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const EditTable = (props: any) => {
  const {
    dataSource: originData,
    columns,
    handleSave = () => {},
    geterrInfo,
    getEditingKey = () => {},
    rowKey,
    ...others
  } = props;
  const [form] = Form.useForm();
  const [data, setData] = useState<any[]>([]);
  const [editingKey, setEditingKey] = useState('');

  useEffect(() => {
    setData(originData);
  }, [originData]);

  const isEditing = (record: any) => record[rowKey] === editingKey;

  const edit = (record: any) => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record,
    });
    getEditingKey(record[rowKey]);
    setEditingKey(record[rowKey]);
  };

  const save = async (key: string) => {
    try {
      const row: any = await form.validateFields();
      const newData: any[] = [...data];
      const index = newData.findIndex((item) => key === item[rowKey]);

      if (index > -1) {
        const item: any = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        handleSave(newData);
        setEditingKey('');
        getEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        handleSave(newData);
        getEditingKey('');
        setEditingKey('');
      }
    } catch (errInfo) {
      geterrInfo(errInfo);
      console.log('Validate Failed:', errInfo);
    }
  };

  const operColumns = [
    {
      title: '操作',
      dataIndex: 'operation',

      render: (_: any, record: any) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              onClick={() => save(record[rowKey])}
              style={{
                marginRight: 8,
              }}
            >
              保存
            </a>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ''}
            onClick={() => edit(record)}
          >
            编辑
          </Typography.Link>
        );
      },
    },
  ];

  const newColumns = columns.concat(operColumns);

  const mergedColumns = newColumns.map((col: any) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record: any) => ({
        record,
        inputType: 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        rowKey={rowKey}
        scroll={{ x: '100%' }}
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={false}
        {...others}
      />
    </Form>
  );
};

export default EditTable;
