import { Box, Typography } from "@mui/material";
import { Ellipsis } from "lucide-react";
import React from "react";

const Trend = ({ name, type, posts, isArabic }) => {
  return (
    <Box className={`${!isArabic && "flex items-center justify-between"}`}>
      <Box>
        {type && <p className="text-secondary text-[0.65rem]">{type}</p>}
        <Typography className={`text-sm font-bold ${isArabic && "text-end"}`}>
          {name}
        </Typography>
        {posts && (
          <Typography className="text-secondary text-[0.7rem]">
            {posts}
          </Typography>
        )}
      </Box>
      {!isArabic && (
        <Box className="flex items-start">
          <Ellipsis size="15px" color="#666" />
        </Box>
      )}
    </Box>
  );
};

export default Trend;
