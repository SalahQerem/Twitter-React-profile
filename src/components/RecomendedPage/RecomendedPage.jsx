import React from "react";
import Button from "../Button/Button.jsx";
import Image from "../Image/Image.jsx";
import NameWithSub from "../NameWithSub/NameWithSub.jsx";
import { Box, Link, Typography } from "@mui/material";

const RecomendedPage = ({
  name,
  sub,
  accountImg,
  description,
  descriptionLink,
}) => {
  return (
    <Box className="flex items-start justify-between min-w-[230px]">
      <Box className="flex items-start gap-2">
        <Image src={accountImg} alt="account image" className="w-7 bg-white" />
        <Box>
          <NameWithSub name={name} sub={sub} nameStyle="font-normal" />
          {description && (
            <Typography variant="caption">
              {description}
              <Link href="#" className="text-[#1D9BF0] no-underline">
                {descriptionLink}
              </Link>
              .
            </Typography>
          )}
        </Box>
      </Box>
      <Button className="bg-white text-black px-3 text-[0.7rem]">Follow</Button>
    </Box>
  );
};

export default RecomendedPage;
