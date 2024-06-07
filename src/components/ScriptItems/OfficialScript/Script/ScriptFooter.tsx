import { Grid, Typography } from "@mui/material";
import React from "react";

const ScriptFooter: React.FC<{ author: string }> = ({ author }) => {
  return (
    <Grid container columns={15} position="absolute" bottom={15}>
      <Grid item sm={6} />
      <Grid item sm={3} textAlign="center">
        <Typography
          variant="scriptFooter"
          textAlign="center"
          fontSize={16}
          position="relative"
        >
          *Not the first night
        </Typography>
      </Grid>
      <Grid item sm={3} />
      <Grid item sm={3}>
        <Typography variant="scriptFooter" fontSize={16}>
          Script by {author}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ScriptFooter;
