import React from "react";
import {Box} from "@mui/material/";

export function Mainbox(){
    return (
        <Box
            className="main-box"
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            sx={{ p: 2, border: '1px  grey' }}
        ></Box>);
    }