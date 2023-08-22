import React, { useState } from "react";
import { Button, TextField, Stack } from "@mui/material";
import { useAppContext } from "contexts/AppContext";

const FromLink: React.FC = () => {
  const [link, setLink] = useState<string>();
  const { loadJSON } = useAppContext();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setLink(event.target.value);
  };

  const handleSubmitForm: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    fetch(link)
      .then((response) => response.text())
      .then((data) => loadJSON(data));
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <Stack direction="row" spacing={1}>
        <TextField label="URL" variant="filled" onChange={handleChange} />
        <Button variant="contained" type="submit">
          Fetch
        </Button>
      </Stack>
    </form>
  );
};

export default FromLink;
