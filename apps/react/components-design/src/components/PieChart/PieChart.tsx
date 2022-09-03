import { FC } from 'react';
import { Cell, Pie, PieChart as RePieChart, PieProps } from 'recharts';

export interface IPieData {
  key: string;
  value: number;
  color: string;
}

interface PieChartProps extends Partial<PieProps> {
  size: number;
  data?: IPieData[];
}

export const PieChart: FC<PieChartProps> = ({ size, data }) => {
  return (
    <RePieChart width={size} height={size}>
      <Pie dataKey={'value'} data={data}>
        {data?.map((d) => (
          <Cell key={d.key} fill={d.color} />
        ))}
      </Pie>
    </RePieChart>
  );
};
