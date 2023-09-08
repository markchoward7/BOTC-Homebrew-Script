import React from "react";
import { Button } from "@mui/material";
import html2canvas from "html2canvas";
import { useAppContext } from "contexts/AppContext";

const SaveScriptButton: React.FC = () => {
  const {
    appState: { scriptRef, scriptName },
  } = useAppContext();

  const handleClick = async () => {
    const element = scriptRef.current;
    const canvas = await html2canvas(element, { useCORS: true });

    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");
    link.href = data;
    link.download = `${scriptName}.jpg`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      sx={{ width: 200, marginBottom: "1%" }}
      variant="contained"
      onClick={handleClick}
    >
      Save Script
    </Button>
  );
};

export default SaveScriptButton;
