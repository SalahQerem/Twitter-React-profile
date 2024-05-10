import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import RecomendedPage from "../RecomendedPage/RecomendedPage.jsx";
import { Box, Typography } from "@mui/material";

const WhoToFollowItem = ({
  name,
  sub,
  description,
  otherFollowers,
  accountImg,
  descriptionLink,
}) => {
  return (
    <Box>
      <Box className="flex items-center gap-3 ps-5">
        <FontAwesomeIcon icon={faUser} color="#666" fontSize="10px" />
        <Typography
          variant="body2"
          className="text-[0.65rem] font-semibold text-secondary py-1"
        >
          {otherFollowers} others follow
        </Typography>
      </Box>
      <RecomendedPage
        name={name}
        sub={sub}
        accountImg={accountImg}
        description={description}
        descriptionLink={descriptionLink}
      />
    </Box>
  );
};

export default WhoToFollowItem;
