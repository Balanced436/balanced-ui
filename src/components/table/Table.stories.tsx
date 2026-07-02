import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table.tsx';
import { TableBody } from './TableBody.tsx';
import { TableCell } from './TableCell.tsx';
import { TableHead } from './TableHead.tsx';
import { TableRow } from './TableRow.tsx';

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

export const Condensed: Story = {
  render: ({ rowCount, columnCount, ...args }) => (
    <Table density={'condensed'} {...args}>
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

export const normal: Story = {
  render: ({ rowCount, columnCount, ...args }) => (
    <Table density={'normal'} {...args}>
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

export const Spacious: Story = {
  render: ({ rowCount, columnCount, ...args }) => (
    <Table density={'spacious'} {...args}>
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
