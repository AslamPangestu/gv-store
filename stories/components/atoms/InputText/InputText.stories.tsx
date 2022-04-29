import { Meta } from '@storybook/react';

import InputText, { Props } from 'components/atoms/InputText';

export default {
  title: 'Components/Atoms/InputText',
  component: InputText,
} as Meta;

const Template = (args: Props) => <InputText {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Nama Lengkap',
};
