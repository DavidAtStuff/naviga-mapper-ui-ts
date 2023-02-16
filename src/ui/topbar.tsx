import React from "react";
import NavigationIcon from '@mui/icons-material/Navigation';
import { Grid } from "@mui/material";

export function Topbar(root: any) {
  const element = (
    <div className="topbar">
      <Grid container
        direction="row"
        justifyContent="center"
        alignItems="center">

        <Grid item>
          <NavigationIcon className="topbar-icon"></NavigationIcon>
        </Grid>
        
        <Grid item xs>
          <p className="banner-title">Send article to Naviga</p>
        </Grid>

      </Grid>
    </div>
  );
  return element;
}
