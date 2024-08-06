import { Box, Divider, Stack, Typography } from '@mui/material';
import CustomCourceTraining from './components/CustomCourceTraining';
import CustomEducation from './components/CustomEducation';
import ProfileSection from './components/ProfileSection';
import ProjectSection from './components/ProjectSection';
import Header from './components/Header';
import Footer from './components/Footer';

const DATA = {
  employee: {
    name: 'Fulan bin Titan',
    position: 'Full Stack Developer',
    email: 'sample.address@supermail.sh',
    image: 'https://thispersondoesnotexist.com/',
    biodata: {
      profile: 'A biodegradable employee, since i am a human :)',
      placeOfBirth: 'Jakarta',
      dateOfBirth: 'xx May 2001',
      gender: 'Male',
      religion: 'Moslem',
      language: 'English, Indonesian',
    },
  },
  histories: {
    employment: [
      {
        employer: 'Sample',
        position: 'Sample',
        from: 'June 2021',
        to: 'July 2024',
      },
      {
        employer: 'Sample',
        position: 'Sample',
        from: 'June 2021',
        to: 'July 2024',
      },
      {
        employer: 'Sample',
        position: 'Sample',
        from: 'June 2021',
        to: 'July 2024',
      },
      {
        employer: 'Sample',
        position: 'Sample',
        from: 'June 2021',
        to: 'July 2024',
      },
      {
        employer: 'Sample',
        position: 'Sample',
        from: 'June 2021',
        to: 'July 2024',
      },
    ],
    certification: [
      {
        title: 'Sample',
        provider: 'Sample',
        date: 'December 2024',
        duration: '5 Years',
        certificate: 'Sample',
      },
      {
        title: 'Sample',
        provider: 'Sample',
        date: 'December 2024',
        duration: '5 Years',
        certificate: 'Sample',
      },
      {
        title: 'Sample',
        provider: 'Sample',
        date: 'December 2024',
        duration: '5 Years',
        certificate: 'Sample',
      },
    ],
    education: [
      {
        school: 'Sample',
        degree: 'Sample',
        subject: 'Sample',
        from: '2020',
        to: '2024',
      },
      {
        school: 'Sample',
        degree: 'Sample',
        subject: 'Sample',
        from: '2020',
        to: '2024',
      },
    ],
    project: [
      {
        projectName: 'Sample',
        role: 'Sample',
        from: 'June 2000',
        to: 'December 2024',
        customer: 'Sample',
        projectDescription: 'Sample',
        technicalInformation: 'Sample',
        jobDescription: 'Sample',
      },
      {
        projectName: 'Sample',
        role: 'Sample',
        from: 'June 2000',
        to: 'December 2024',
        customer: 'Sample',
        projectDescription: 'Sample',
        technicalInformation: 'Sample',
        jobDescription: 'Sample',
      },
      {
        projectName: 'Sample',
        role: 'Sample',
        from: 'June 2000',
        to: 'December 2024',
        customer: 'Sample',
        projectDescription: 'Sample',
        technicalInformation: 'Sample',
        jobDescription: 'Sample',
      },
      {
        projectName: 'Sample',
        role: 'Sample',
        from: 'June 2000',
        to: 'December 2024',
        customer: 'Sample',
        projectDescription: 'Sample',
        technicalInformation: 'Sample',
        jobDescription: 'Sample',
      },
      {
        projectName: 'Sample',
        role: 'Sample',
        from: 'June 2000',
        to: 'December 2024',
        customer: 'Sample',
        projectDescription: 'Sample',
        technicalInformation: 'Sample',
        jobDescription: 'Sample',
      },
      {
        projectName: 'Sample',
        role: 'Sample',
        from: 'June 2000',
        to: 'December 2024',
        customer: 'Sample',
        projectDescription: 'Sample SAJA',
        technicalInformation: 'Sample',
        jobDescription: 'Sample',
      },
      {
        projectName: 'Sample',
        role: 'Sample',
        from: 'June 2000',
        to: 'December 2024',
        customer: 'Sample',
        projectDescription: 'Sample',
        technicalInformation: 'Sample',
        jobDescription: 'Sample',
      },
    ],
  },
};

const Page = () => {
  return (
    <>
      <Header />
      <Footer />
      <Box component="table" sx={{ width: '100%' }}>
        <Box component="tbody">
          <Box component="tr">
            <Box component="td" sx={{ py: 2, px: 6 }}>
              <ProfileSection data={DATA} />
              <Divider flexItem />
              <Stack direction="row" spacing={1} justifyContent="stretch" sx={{ pb: 2, pt: 1, pageBreakAfter: 'always' }}>
                <CustomCourceTraining headers="Cource, Training" certification={DATA.histories.certification} />
                <Divider orientation="vertical" flexItem />
                <CustomEducation headers="Education" education={DATA.histories.education} />
              </Stack>
              <ProjectSection data={DATA} />
              <Typography variant="caption" color="GrayText" sx={{ pt: 4, alignSelf: 'center' }}>
                PT Padepokan Tujuh Sembilan
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Page;
