import React from 'react';
import { Stack, Table, TableCell, TableHead, TableRow, Typography } from '@mui/material';

interface CustomEducationProps {
  headers: string;
  education: {
    school: string;
    degree: string;
    subject: string;
    from: string;
    to: string;
  }[];
}

const CustomEducation: React.FC<CustomEducationProps> = ({ headers, education }) => (
  <Stack direction="column" spacing={1} sx={{ flexBasis: '50%', pb: 4 }}>
    <Typography variant="body1" sx={{ pt: 1 }}>
      <strong>{headers}</strong>
    </Typography>
    <Table size="small">
      <TableHead>
        <TableRow>
          {['School', 'Degree', 'Subject', 'From', 'To'].map((o) => (
            <TableCell key={o} sx={{ p: 0 }}>
              <Typography variant="caption">
                <strong>{o}</strong>
              </Typography>
            </TableCell>
          ))}
        </TableRow>
        {education.map((o, i) => (
          <TableRow key={i + 1}>
            <TableCell sx={{ p: 0 }}>
              <Typography variant="caption">{o.school}</Typography>
            </TableCell>
            <TableCell sx={{ p: 0 }}>
              <Typography variant="caption">{o.degree}</Typography>
            </TableCell>
            <TableCell sx={{ p: 0 }}>
              <Typography variant="caption">{o.subject}</Typography>
            </TableCell>
            <TableCell sx={{ p: 0 }}>
              <Typography variant="caption">{o.from}</Typography>
            </TableCell>
            <TableCell sx={{ p: 0 }}>
              <Typography variant="caption">{o.to}</Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableHead>
    </Table>
  </Stack>
);

export default CustomEducation;
