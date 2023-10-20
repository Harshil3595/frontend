import React, { useState } from 'react';
import { Tabs, Tab, Container } from '@mui/material';
import TabPanel from './TabPanel'; 
import Details from './Components/Details/Details';
import CurrentMedication from './Components/CurrentMedication/CurrentMedication';
import Investigation from './Components/Investigations/Investigation';
import MedicalConditions from './Components/MedicalConditions/MedicalConditions';

function App() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Container maxWidth="md">
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Details" />
        <Tab label="Current Medication" />
        <Tab label="Investigations" />
        <Tab label="Medical Conditions" />
      </Tabs>
      <TabPanel value={selectedTab} index={0}>
        <Details/>
      </TabPanel>
      <TabPanel value={selectedTab} index={1}>
       <CurrentMedication></CurrentMedication>
      </TabPanel>
      <TabPanel value={selectedTab} index={2}>
       <Investigation></Investigation>
      </TabPanel>
      <TabPanel value={selectedTab} index={3}>
       <MedicalConditions></MedicalConditions>
      </TabPanel>
    </Container>
  );
}

export default App;
