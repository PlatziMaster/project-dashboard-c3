import React from 'react';
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

interface ContainerProps {
  data: Array<{label: string, value: number, color: string}>
}

const RenderPieChart: React.FC<ContainerProps> = ({data}) => {

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie data={data} dataKey="value" label>
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)
          }
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );

}

export default RenderPieChart;