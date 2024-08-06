import React from 'react';
import { Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

interface CustomTableProps {
  headers: string;
  employment: {
    employer: string;
    position: string;
    from: string;
    to: string;
  }[];
}

const CustomTableEmployment: React.FC<CustomTableProps> = ({ headers, employment }) => (
  <Stack direction="column" spacing={1} sx={{ flexBasis: '50%', pb: 4 }}>
    <Typography variant="body1" sx={{ pt: 1 }}>
      <strong>{headers}</strong>
    </Typography>
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell sx={{ p: 0 }} />
          <TableCell width="50" sx={{ p: 0 }}>
            <Typography variant="caption">
              <strong>From</strong>
            </Typography>
          </TableCell>
          <TableCell width="50" sx={{ p: 0 }}>
            <Typography variant="caption">
              <strong>To</strong>
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {employment.map((o, i) => (
          <TableRow key={i+1}>
            <TableCell sx={{ p: 0 }}>
              <Typography variant="body2">
                <strong>{o.employer}</strong>
              </Typography>
              <Typography variant="caption">{o.position}</Typography>
            </TableCell>
            <TableCell sx={{ p: 0 }}>
              <Typography variant="caption">{o.from}</Typography>
            </TableCell>
            <TableCell sx={{ p: 0 }}>
              <Typography variant="caption">{o.to}</Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Stack>
);

export default CustomTableEmployment;
