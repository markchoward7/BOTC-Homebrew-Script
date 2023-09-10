import React, { useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import { domToPng } from "modern-screenshot";
import { useAppContext } from "contexts/AppContext";

const SaveImageButton: React.FC<{ item: "SCRIPT" | "NIGHT_ORDER" }> = ({
  item,
}) => {
  const {
    appState: { nightOrderRef, scriptRef, scriptName },
  } = useAppContext();

  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = async () => {
    const element =
      item === "SCRIPT" ? scriptRef.current : nightOrderRef.current;
    setLoading(true);
    const data = await domToPng(element);
    setLoading(false);
    const link = document.createElement("a");
    link.href = data;
    if (item === "SCRIPT") {
      link.download = `${scriptName}.jpg`;
    } else {
      link.download = `${scriptName}-night-order.jpg`;
    }

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
