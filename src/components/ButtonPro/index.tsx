/**
 * 封装Button
 * @author: serenespring
 * @since: 2022-01-09
 */
import React from 'react';
import { Button, Popconfirm } from 'antd';
import 'antd/dist/antd.css';

const ButtonPro = (props: any) => {
  const { type, onClick = () => {} } = props;
  if (type === 'delete') {
    return (
      <Popconfirm
        title="确认要删除吗?"
        onConfirm={onClick}
        style={{ width: 200 }}
      >
        <Button
          {...props}
          type="danger"
          onClick={(e: any) => e.preventDefault()}
        >
          删除
        </Button>
      </Popconfirm>
    );
  }
  return <Button {...props} />;
};

export default ButtonPro;
