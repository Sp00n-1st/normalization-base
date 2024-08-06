import { Avatar, Box, Stack, Typography } from '@mui/material';
interface EmployeeDetailsProps {
  employee: {
    name: string;
    position: string;
    email: string;
    image: string;
  };
}
const EmployeeDetails: React.FC<EmployeeDetailsProps> = ({ employee }) => (
  <Stack direction="column" spacing={1} alignItems="stretch">
    <Stack direction="row" alignItems="center">
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h5" sx={{ py: 1 }}>
          <strong>{employee.name}</strong>
        </Typography>
        <Typography variant="subtitle1">{employee.position}</Typography>
        <Typography variant="subtitle2">{employee.email}</Typography>
      </Box>
      <Box>
        <Avatar src={employee.image} sx={{ height: 150, width: 150 }}>
          Talent Image
        </Avatar>
      </Box>
    </Stack>
  </Stack>
);

export default EmployeeDetails;
