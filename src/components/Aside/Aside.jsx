import React from "react";
import AsideItem from "../AsideLink/AsideLink.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { asideItems } from "./asideItems.js";
import Button from "../Button/Button.jsx";
import Image from "../Image/Image.jsx";
import profileImage from "../../assets/profile-image.jpg";
import { Ellipsis } from "lucide-react";
import NameWithSub from "../NameWithSub/NameWithSub.jsx";
import { Box, Link, List, ListItem } from "@mui/material";

export const mainColor = "#61DAFB";

const Aside = () => {
  const renderAsideItems = asideItems.map((item) => (
    <ListItem key={item.name} sx={{ paddingX: 0 }}>
      <AsideItem icon={item.icon} name={item.name} />
    </ListItem>
  ));
  return (
    <Box className="flex justify-between flex-col p-2 w-[210px]">
      <Box>
        <Link href="#">
          <FontAwesomeIcon icon={faXTwitter} size="2x" color="white" />
        </Link>
        <List className="flex flex-col gap-2">{renderAsideItems}</List>
        <Box className="mt-5">
          <Button className="bg-mainColor w-[160px] py-2">Post</Button>
        </Box>
      </Box>
      <Link
        href="#"
        className="flex items-center justify-between gap-2"
        sx={{ color: "white", textDecoration: "none" }}
      >
        <Image src={profileImage} alt="user profile image" style="w-8" />
        <NameWithSub
          name="Mohammad Dwika..."
          sub="@MohammadDwika..."
          nameStyle="text-[0.65rem]"
        />
        <Ellipsis size={"20px"} />
      </Link>
    </Box>
  );
};

export default Aside;
