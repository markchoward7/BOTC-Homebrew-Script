import React, { SyntheticEvent, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import FromFile from "./FromFile";
import FromLink from "./FromLink";

const LoadData: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <Box sx={{ marginTop: "1%" }}>
      <Tabs value={currentTab} onChange={handleChange}>
        <Tab label="Link" />
        <Tab label="File" />
      </Tabs>
      <div hidden={currentTab !== 0}>
        <FromLink />
      </div>
      <div hidden={currentTab !== 1}>
        <FromFile />
      </div>
    </Box>
  );
};

export default LoadData;
