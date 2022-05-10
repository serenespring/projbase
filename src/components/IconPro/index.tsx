import React from 'react';
import 'antd/dist/antd.css';
import { createFromIconfontCN } from '@ant-design/icons';

const IconPro = (props: any) => {
  const {
    type,
    scriptUrl = '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
    ...others
  } = props;
  const MyIcon = createFromIconfontCN({
    scriptUrl, // 在 iconfont.cn 上生成
  });
  return <MyIcon type={type} {...others} />;
};

export default IconPro;
