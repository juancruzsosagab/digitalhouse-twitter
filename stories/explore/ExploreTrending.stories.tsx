import ExploreTrending from '@/app/components/explore/ExploreTrending';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Explore/ExploreTrending',
  component: ExploreTrending,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof ExploreTrending>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    hashes: [
      {
        hash: 'Tatooine',
        count: 2,
      },
      {
        hash: 'Hoth',
        count: 1,
      },
    ],
  },
};

export const MoreThan2: Story = {
  args: {
    hashes: [
      {
        hash: 'Tatooine',
        count: 2,
      },
      {
        hash: 'Hoth',
        count: 1,
      },
      {
        hash: 'River',
        count: 1,
      },
    ],
  },
};
