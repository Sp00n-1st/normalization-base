import React from 'react';
import { Avatar, Box, Divider, Stack, Typography } from '@mui/material';
import CustomTablePersonalDetail from './CustomTablePersonalDetail';
import CustomTableEmployment from './CustomTableEmployment';

interface Biodata {
  profile: string;
  placeOfBirth: string;
  dateOfBirth: string;
  gender: string;
  religion: string;
  language: string;
}

interface Employment {
  employer: string;
  position: string;
  from: string;
  to: string;
}

interface Employee {
  name: string;
  position: string;
  email: string;
  image: string;
  biodata: Biodata;
}

interface Histories {
  employment: Employment[];
}

interface ProfileSectionProps {
  data: {
    employee: Employee;
    histories: Histories;
  };
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ data }) => (
  <Stack direction="column" spacing={1} alignItems="stretch" pb={1} pt={0.5}>
    <Stack direction="row" alignItems="center">
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h5" sx={{ py: 1 }}>
          <strong>{data.employee.name}</strong>
        </Typography>
        <Typography variant="subtitle1">{data.employee.position}</Typography>
        <Typography variant="subtitle2">{data.employee.email}</Typography>
      </Box>
      <Box>
        <Avatar src={data.employee.image} sx={{ height: 150, width: 150 }}>
          Talent Image
        </Avatar>
      </Box>
    </Stack>
    <Stack direction="row" spacing={1} justifyContent="stretch">
      <CustomTableEmployment headers="Employment" employment={data.histories.employment} />
      <Divider orientation="vertical" flexItem />
      <Stack direction="column" spacing={1} sx={{ flexBasis: '50%', pb: 4 }}>
        <Typography variant="body1" sx={{ pt: 1 }}>
          <strong>Objective</strong>
        </Typography>
        <Typography variant="body2">{data.employee.biodata.profile}</Typography>
        <CustomTablePersonalDetail headers={'Personal Detail'} biodata={data.employee.biodata} />
      </Stack>
    </Stack>
  </Stack>
);

export default ProfileSection;
