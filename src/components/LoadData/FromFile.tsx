import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const run = async () => {
      await new Promise(res => {
        setTimeout(res, 100)
      })
      loadJSON('[{"id":"_meta","author":"Ben B","name":"Trouble with Violets"}, {"id": "washerwoman"}, {"id": "librarian"}, {"id": "investigator"}, {"id": "chef"}, {"id": "empath"}, {"id": "fortune_teller"}, {"id": "undertaker"}, {"id": "monk"}, {"id": "ravenkeeper"}, {"id": "virgin"}, {"id": "slayer"}, {"id": "soldier"}, {"id": "mayor"}, {"id": "butler"}, {"id": "drunk"}, {"id": "recluse"}, {"id": "saint"}, {"id": "evil_twin"}, {"id": "witch"}, {"id": "cerenovus"}, {"id": "pit-hag"}, {"id": "fang_gu"}, {"id": "vigormortis"}, {"id": "no_dashii"}, {"id": "vortox"}]')
    }
    
    run()
  }, [])

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
