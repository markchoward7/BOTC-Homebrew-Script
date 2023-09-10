import { Grid, Typography } from "@mui/material";
import React from "react";

const ScriptFooter: React.FC<{ author: string }> = ({ author }) => {
  return (
    <Grid container columns={15} position="absolute" bottom={0}>
      <Grid item sm={7} />
      <Grid item sm={1}>
        <img
          src="/laurel.png"
          style={{
            position: "absolute",
            bottom: 0,
            left: 315,
            height: 50,
            transform: "scale(-1, 1)",
          }}
        />
        <img
          src="/footer-circle.png"
          style={{ position: "absolute", bottom: -1, left: 396 }}
        />
        <img
          src="/laurel.png"
          style={{
            position: "absolute",
            bottom: 0,
            left: 456,
            height: 50,
          }}
        />
        <Typography
          variant="scriptFooter"
          textAlign="center"
          fontSize={16}
          position="relative"
        >
          *Not the first night
        </Typography>
      </Grid>
      <Grid item sm={4} />
      <Grid item sm={3}>
        <Typography variant="scriptFooter">
          Homebrew script by {author}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ScriptFooter;
