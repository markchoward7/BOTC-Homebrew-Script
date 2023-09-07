import React from "react";
import { Button } from "@mui/material";
import html2canvas from "html2canvas";
import { useAppContext } from "contexts/AppContext";

const SaveNightOrderButton: React.FC = () => {
  const {
    appState: { nightOrderRef, scriptName },
  } = useAppContext();

  const handleClick = async () => {
    const element = nightOrderRef.current;
    const canvas = await html2canvas(element, { useCORS: true });

    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");
    link.href = data;
    link.download = `${scriptName}-night-order.jpg`;

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
      Save Night Order
    </Button>
  );
};

export default SaveNightOrderButton;
