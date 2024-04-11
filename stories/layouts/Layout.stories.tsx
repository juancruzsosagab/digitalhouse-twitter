import UsersLayout from '@/app/(main)/layout';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Layout/Users',
  component: UsersLayout,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof UsersLayout>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    children: <div>hola</div>,
  },
};
