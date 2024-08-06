import React from 'react';
import { Stack, Typography } from '@mui/material';
import CustomProject from './CustomProject';

interface Project {
  projectName: string;
  role: string;
  from: string;
  to: string;
  customer: string;
  projectDescription: string;
  technicalInformation: string;
  jobDescription: string;
}

interface Histories {
  project: Project[];
}

interface ProjectSectionProps {
  data: {
    histories: Histories;
  };
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ data }) => (
  <Stack direction="row" spacing={1} justifyContent="stretch" sx={{ pt: 2 }}>
    <Stack direction="column" spacing={1} sx={{ flexBasis: '100%', pb: 4 }}>
      <Typography variant="body1" sx={{ pt: 1 }}></Typography>
      <CustomProject headers="Project" project={data.histories.project} />
    </Stack>
  </Stack>
);

export default ProjectSection;
