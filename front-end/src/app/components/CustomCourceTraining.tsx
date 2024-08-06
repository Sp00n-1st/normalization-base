import React from 'react';
import { Stack, Table, TableCell, TableHead, TableRow, Typography } from '@mui/material';

interface CustomCourceTraining {
  headers: string;
  certification: {
    title: string;
    provider: string;
    date: string;
    duration: string;
    certificate: string;
  }[];
}

const CustomCourceTraining: React.FC<CustomCourceTraining> = ({ headers, certification }) => (
  <Stack direction="column" spacing={1} sx={{ flexBasis: '50%', pb: 4 }}>
    <Typography variant="body1" sx={{ pt: 1 }}>
      <strong>{headers}</strong>
    </Typography>
    <Table size="small">
      <TableHead>
        <TableRow>
          {['Title', 'Provider', 'Date', 'Duration', 'Certificate'].map((o) => (
            <TableCell key={o} sx={{ p: 0 }}>
              <Typography variant="caption">
                <strong>{o}</strong>
              </Typography>
            </TableCell>
          ))}
        </TableRow>
        {certification.map((o, i) => (
          <TableRow key={i + 1}>
            <TableCell sx={{ p: 0 }}>
              <Typography variant="caption">{o.title}</Typography>
            </TableCell>
            <TableCell sx={{ p: 0 }}>
              <Typography variant="caption">{o.provider}</Typography>
            </TableCell>
            <TableCell sx={{ p: 0 }}>
              <Typography variant="caption">{o.date}</Typography>
            </TableCell>
            <TableCell sx={{ p: 0 }}>
              <Typography variant="caption">{o.duration}</Typography>
            </TableCell>
            <TableCell sx={{ p: 0 }}>
              <Typography variant="caption">{o.certificate}</Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableHead>
    </Table>
  </Stack>
);

export default CustomCourceTraining;
