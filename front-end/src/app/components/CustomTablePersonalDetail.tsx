import React from 'react';
import { Stack, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';

interface CustomTablePersonalDetailProps {
  headers: string;
  biodata: {
    profile: string;
    placeOfBirth: string;
    dateOfBirth: string;
    gender: string;
    religion: string;
    language: string;
  };
}

const CustomTablePersonalDetail: React.FC<CustomTablePersonalDetailProps> = ({ headers, biodata }) => {
  const biodataEntries = [
    { label: 'Place of Birth', value: biodata.placeOfBirth },
    { label: 'Date of Birth', value: biodata.dateOfBirth },
    { label: 'Gender', value: biodata.gender },
    { label: 'Religion', value: biodata.religion },
    { label: 'Language', value: biodata.language },
  ];

  return (
    <Stack direction="column" spacing={1} sx={{ flexBasis: '50%', pb: 4 }}>
      <Typography variant="body1" sx={{ pt: 1 }}>
        <strong>{headers}</strong>
      </Typography>
      <Table size="small">
        <TableBody>
          {biodataEntries.map((entry, index) => (
            <TableRow key={index + 1}>
              <TableCell sx={{ p: 0 }}>
                <Typography variant="caption">
                  <strong>{entry.label}</strong>
                </Typography>
              </TableCell>
              <TableCell colSpan={index === biodataEntries.length - 1 ? 4 : 1} sx={{ p: 0 }}>
                <Typography variant="caption">{entry.value}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Stack>
  );
};

export default CustomTablePersonalDetail;
