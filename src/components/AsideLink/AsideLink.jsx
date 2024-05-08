import { Box, Typography } from "@mui/material";
import React from "react";

const AsideItem = ({ icon, name }) => {
  return (
    <Box href="#" className="flex items-center justify-start gap-3">
      <Box>{icon}</Box>
      <Typography variant="subtitle2" fontSize="0.9rem">
        {name}
      </Typography>
    </Box>
  );
};

export default AsideItem;
