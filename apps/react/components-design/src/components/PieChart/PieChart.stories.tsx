import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IPieData, PieChart } from './PieChart';

export default {
  title: 'PieChart',
  component: PieChart,
  argTypes: {
    size: {
      defaultValue: 319,
      control: {
        type: 'number',
      },
    },
    data: {
      control: false,
    },
  },
} as ComponentMeta<typeof PieChart>;

const storyData: IPieData[] = [
  { key: 'AAA', value: 72, color: '#de7d4c' },
  { key: 'BBB', value: 8, color: '#e4e05a' },
  { key: 'CCC', value: 10, color: '#37bd6d' },
  { key: 'DDD', value: 10, color: '#3790bd' },
];

export const Primary: ComponentStory<typeof PieChart> = ({ size, data = storyData }) => {
  return <PieChart size={size} data={data} />;
};
