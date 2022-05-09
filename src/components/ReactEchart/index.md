---
nav:
  title: 组件
  path: /components
---

## ReactEChart 图表

- 基于 echarts-for-react
- [参考文档](https://git.hust.cc/echarts-for-react/)

## 代码示例

```tsx
import React from 'react';
import { ReactEchart } from 'projbase';
export default () => {
  const option = {
    title: {
      text: '堆叠区域图',
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['邮件营销', '联盟广告', '视频广告'],
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: '邮件营销',
        type: 'line',
        stack: '总量',
        areaStyle: { normal: {} },
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: '联盟广告',
        type: 'line',
        stack: '总量',
        areaStyle: { normal: {} },
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: '视频广告',
        type: 'line',
        stack: '总量',
        areaStyle: { normal: {} },
        data: [150, 232, 201, 154, 190, 330, 410],
      },
    ],
  };
  return <ReactEchart option={option} />;
};
```

## API

| 属性   | 说明         | 类型   | 默认值 |
| ------ | ------------ | ------ | ------ |
| option | echarts 属性 | object | -      |
| height | 图形高度     | number | -      |

更多属性参考[echarts-for-react](https://git.hust.cc/echarts-for-react/)
