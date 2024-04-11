import UserTabs from "@/app/components/users/UserTabs";
import { Meta, StoryObj } from "@storybook/react"
import { fn } from '@storybook/test';

const meta = {
    title: 'Users/UserTabs',
    component: UserTabs,
    parameters: {
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  } satisfies Meta<typeof UserTabs>;


  const messages = [
    {
      username: 'Anakin Skywalker',
      message: 'Primer mensaje',
      repliesCount: 13,
      name: 'John Doe',
    },
    {
      username: 'Anakin Skywalker',
      message: 'Segundo mensaje',
      repliesCount: 10,
      name: 'John Doe',
    },
  ];

  const replies = [
    {
      name: 'John Doe',
      username: 'Anakin Skywalker',
      message: 'Mi respuesta',
      repliesCount: 0,
    },
  ];

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story={
    args:{
        messages:  messages,
        replies: replies
    }
}