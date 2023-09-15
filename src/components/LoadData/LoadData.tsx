import React, { SyntheticEvent, useEffect, useState } from "react";
import { Box, CircularProgress, Tab, Tabs } from "@mui/material";
import FromFile from "./FromFile";
import FromLink from "./FromLink";
import { useAppContext } from "contexts/AppContext";

const LoadData: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const { setOfficialCharacters } = useAppContext();

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bra1n/townsquare/main/src/roles.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setOfficialCharacters(data);
        setLoading(false);
      });
  }, []);

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <Box sx={{ marginTop: "1%" }}>
      <Tabs value={currentTab} onChange={handleChange}>
        <Tab label="Link" />
        <Tab label="File" />
      </Tabs>
      {loading && <CircularProgress />}
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
