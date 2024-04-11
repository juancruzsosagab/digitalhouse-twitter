import Menu from '@/app/components/menu/Menu';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Menu/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    links: [
      {
        title: 'Inicio',
        href: '/',
      },
      {
        title: 'Explorar',
        href: '/Explorar',
      },
      {
        title: 'Perfil',
        href: '/perfil',
      },
    ],
  },
};
