import { Meta } from '@storybook/react';

import GameItem, { Props } from 'components/molecules/GameItem';

export default {
  title: 'Components/Molecules/GameItem',
  component: GameItem,
} as Meta;
// TODO: Next/Image not working
const Template = (args: Props) => <GameItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 1,
  title: 'Title',
  category: 'Category',
  thumbnail: '/img/Thumbnail-1.png',
};
