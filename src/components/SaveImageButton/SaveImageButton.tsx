import React, { useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import { domToPng } from "modern-screenshot";
import { useAppContext } from "contexts/AppContext";

const SaveImageButton: React.FC<{ item: "SCRIPT" | "NIGHT_ORDER" }> = ({
  item,
}) => {
  const {
    appState: {
      nightOrderFrontRef,
      nightOrderBackRef,
      scriptFrontRef,
      scriptBackRef,
      scriptName,
    },
  } = useAppContext();

  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = () => {
    const elements =
      item === "SCRIPT"
        ? [scriptFrontRef, scriptBackRef]
        : [nightOrderFrontRef, nightOrderBackRef];
    setLoading(true);
    elements.forEach(async (element, index) => {
      if (element === null) {
        return;
      }
      const data = await domToPng(element.current, {scale: item === "SCRIPT" ? 4 : 3, quality: 0.8});
      setLoading(false);
      const link = document.createElement("a");
      link.href = data;
      if (item === "SCRIPT") {
        link.download = `${scriptName}${index === 1 ? "-back" : ""}.jpg`;
      } else {
        link.download = `${scriptName}-night-order${
          index === 1 ? "-back" : ""
        }.jpg`;
      }
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <Button
      sx={{ width: 200, marginBottom: "1%" }}
      variant="contained"
      onClick={handleClick}
      disabled={loading}
    >
      Save {item === "SCRIPT" ? "Script" : "Night Order"}
      {loading && <CircularProgress size={25} />}
    </Button>
  );
};

export default SaveImageButton;
