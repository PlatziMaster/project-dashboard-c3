import React from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

interface ContainerProps {
  data: Array<{name: string, expected: number, received: number}>
}
const RenderBarChart: React.FC<ContainerProps> = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
    <BarChart width={600} height={300} data={data}
          margin={{top: 20, right: 30, left: 20, bottom: 5}}>
      <CartesianGrid strokeDasharray="3 1"/>
      <XAxis dataKey="name"/>
      <YAxis/>
      <Tooltip/>
      <Legend />
      {/* {
        data.map((entry) => (
          <>
          <Bar dataKey={entry.expected} stackId="a" fill="FED13D"/>
          <Bar dataKey={entry.received} stackId="a" fill="7044ff" />
          </>
        ))
      } */}
      <Bar dataKey="received" stackId="a" fill="#206a5d" />
      <Bar dataKey="expected" stackId="a" fill="#f09ae9"/>
    </BarChart>
    </ResponsiveContainer>
  );
}

export default RenderBarChart