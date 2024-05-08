import { Box, Typography } from "@mui/material";
import React from "react";

const NameWithSub = ({ name, sub, nameStyle, containerStyle }) => {
  return (
    <Box className={`${containerStyle}`}>
      <Typography
        variant="subtitle1"
        fontSize="0.8rem"
        fontWeight="600"
        className={`${nameStyle}`}
      >
        {name}
      </Typography>
      <Typography
        variant="subtitle2"
        color="rgb(102 102 102 / 1)"
        fontSize="0.7rem"
      >
        {sub}
      </Typography>
    </Box>
  );
};

export default NameWithSub;
