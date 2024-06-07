import { Paper } from "@mui/material";
import { useStylingContext } from "contexts/StylingContext";
import React, { MutableRefObject, PropsWithChildren, forwardRef } from "react";

const StyledPaper = forwardRef(
  ({ children }: PropsWithChildren, ref: MutableRefObject<undefined>) => {
  const {
    styleState: { pageWidth, pageHeight },
  } = useStylingContext();

    return (
      <Paper
        variant="outlined"
        sx={{
          display: "inline-block",
          width: pageWidth,
          height: pageHeight,
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
