import { Paper } from "@mui/material";
import React, { MutableRefObject, PropsWithChildren, forwardRef } from "react";

const StyledPaper = forwardRef(
  ({ children }: PropsWithChildren, ref: MutableRefObject<undefined>) => {
    return (
      <Paper
        variant="outlined"
        sx={{
          display: "inline-block",
          width: 900,
          height: 1200,
          margin: "5%",
          position: "relative",
        }}
        ref={ref}
      >
        {children}
      </Paper>
    );
  }
);

export default StyledPaper;
