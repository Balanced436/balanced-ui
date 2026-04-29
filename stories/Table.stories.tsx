import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '../src/components/table/table';
import { TableBody } from '../src/components/table/TableBody';
import { TableCell } from '../src/components/table/TableCell';
import { TableHead } from '../src/components/table/TableHead';
import { TableRow } from '../src/components/table/TableRow';

import type { ComponentProps } from 'react';

type TableStoryArgs = ComponentProps<typeof Table> & {
  rowCount: number;
  columnCount: number;
};

const meta: Meta<TableStoryArgs> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    rowCount: {
      control: { type: 'number', min: 1, max: 20 },
      description: 'Number of body rows',
    },
    columnCount: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Number of columns',
    },
  },
  args: {
    rowCount: 3,
    columnCount: 3,
  },
};

export default meta;

type Story = StoryObj<TableStoryArgs>;

export const Default: Story = {
  render: ({ rowCount, columnCount, ...args }) => (
    <Table {...args}>
      <TableHead>
        <TableRow>
          {Array.from({ length: columnCount }).map((_, i) => (
            <TableCell key={i}>Header {i + 1}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {Array.from({ length: rowCount }).map((_, rowIndex) => (
          <TableRow key={rowIndex}>
            {Array.from({ length: columnCount }).map((_, colIndex) => (
              <TableCell key={colIndex}>
                Row {rowIndex + 1} Cell {colIndex + 1}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};
