import { Meta } from '@storybook/react';

import StepItem, { Props } from 'components/molecules/StepItem';

export default {
  title: 'Components/Molecules/StepItem',
  component: StepItem,
} as Meta;
// TODO: Next/Image not working
const Template = (args: Props) => <StepItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: 'step-1',
  title: '1. Start',
  description1: 'Pilih salah satu game',
  description2: 'yang ingin kamu top up',
};
