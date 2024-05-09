import { Box, Typography } from "@mui/material";
import React from "react";

const NameWithSub = ({ name, sub, nameStyle, containerStyle }) => {
  return (
    <Box className={`${containerStyle}`}>
      <Typography
        variant="subtitle1"
        className={`text-sm font-semibold ${nameStyle}`}
      >
        {name}
      </Typography>
      <Typography variant="subtitle2" className="text-secondary text-xs">
        {sub}
      </Typography>
    </Box>
  );
};

export default NameWithSub;
