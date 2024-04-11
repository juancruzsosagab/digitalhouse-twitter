import Message from '@/app/components/messages/Message';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Messages/Message',
  component: Message,
  parameters: {
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    message: {
      message: 'Mensaje de prueba',
      username: 'Anakin Skywalker',
      repliesCount: 13,
      name: 'John Doe',
    },
  },
};
