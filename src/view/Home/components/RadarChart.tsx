import React from "react";
import { Pie } from "@ant-design/plots";
import { Card } from "antd";

export default function RadarChart() {
  const data = [
    { type: "A", value: 30 },
    { type: "B", value: 50 },
    { type: "C", value: 20 },
  ];

  const config = {
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'inner',
      offset: '-30%',
      content: '{percentage}',
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [{ type: 'element-active' }],
  };
  return (
    <Card>
        <Pie {...config} style={{height: '250px'}}/>
    </Card>
  );
}
