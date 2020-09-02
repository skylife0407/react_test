import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Cell,
} from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 330 },
  { name: 'Group D', value: 250 },
  { name: 'Group E', value: 200 },
  { name: 'Group F', value: 170 },
  { name: 'Group G', value: 150 },
  { name: 'Group H', value: 100 },
  { name: 'Group I', value: 50 },
  { name: 'Group J', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';

  render() {
    return (
      <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div>
        <PieChart width={370} height={261}>
          <Pie
            data={data}
            cx={180}
            cy={125}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={130}
            fill="#8884d8"
            dataKey="value"
          >
            {
              data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
          </Pie>
        </PieChart>
        </div>
      </div>
      
    );
  }
}
