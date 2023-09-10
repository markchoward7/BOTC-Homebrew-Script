import React, { useState } from "react";
import { Button, Stack, TextField, Box } from "@mui/material";
import { useAppContext } from "contexts/AppContext";

const FromFile: React.FC = () => {
  const [file, setFile] = useState<File>();
  const { loadJSON } = useAppContext();

  const handleFileSelect: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const { files } = event.target;
    setFile(files?.[0]);
  };

  const handleSubmitForm: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    file.text().then((data) => loadJSON(data));
  };

  return (
    <Box alignSelf="center">
      <form onSubmit={handleSubmitForm}>
        <Stack direction="row" spacing={1}>
          <TextField
            type="file"
            variant="filled"
            onChange={handleFileSelect}
            InputProps={{ sx: { color: "rgba(255, 255, 255, 0.7)" } }}
          />
          <Button variant="contained" type="submit">
            Upload
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default FromFile;
