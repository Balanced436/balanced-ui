import type { Meta, StoryObj } from '@storybook/react';
import { Preview, Table, TableBody, TableCell, TableHead, TableRow } from '../../main.ts';

const meta: Meta<typeof Preview> = {
  title: 'Components/preview',
  component: Preview,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Preview>;

export const Default: Story = {
  render: (args) => (
    <Preview>
      <Preview.Panel>
        <Table density="condensed">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nom</TableCell>
              <TableCell>Rôle</TableCell>
              <TableCell>Statut</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>#1</TableCell>
              <TableCell>Alice Martin</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell>Actif</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>#2</TableCell>
              <TableCell>Bob Dupont</TableCell>
              <TableCell>Developer</TableCell>
              <TableCell>Actif</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>#3</TableCell>
              <TableCell>Charlie Zen</TableCell>
              <TableCell>Designer</TableCell>
              <TableCell>Inactif</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>#4</TableCell>
              <TableCell>Diana Prince</TableCell>
              <TableCell>Product Owner</TableCell>
              <TableCell>Actif</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Preview.Panel>
      <Preview.Code>
        {`<Table density="condensed">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nom</TableCell>
              <TableCell>Rôle</TableCell>
              <TableCell>Statut</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>#1</TableCell>
              <TableCell>Alice Martin</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell>Actif</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>#2</TableCell>
              <TableCell>Bob Dupont</TableCell>
              <TableCell>Developer</TableCell>
              <TableCell>Actif</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>#3</TableCell>
              <TableCell>Charlie Zen</TableCell>
              <TableCell>Designer</TableCell>
              <TableCell>Inactif</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>#4</TableCell>
              <TableCell>Diana Prince</TableCell>
              <TableCell>Product Owner</TableCell>
              <TableCell>Actif</TableCell>
            </TableRow>
          </TableBody>
        </Table>`}
      </Preview.Code>
    </Preview>
  ),
};
