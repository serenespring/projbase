import 'antd/dist/antd.css';

import React, { useRef } from 'react';
import ReactECharts from 'echarts-for-react';

const ReactEchart = (props: any) => {
  const instance = useRef(null);

  const { option, height = 400, ...others } = props;
  return (
    <ReactECharts
      ref={instance}
      option={option}
      style={{ height }}
      {...others}
    />
  );
};

export default ReactEchart;
