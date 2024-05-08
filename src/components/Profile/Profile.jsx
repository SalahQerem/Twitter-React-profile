import {
  ArrowLeft,
  ArrowUpFromLine,
  BarChart2,
  BellPlus,
  Calendar,
  Ellipsis,
  Heart,
  Link as LinkIcon,
  MessageCircle,
  Repeat2,
} from "lucide-react";
import React from "react";
import NameWithSub from "../NameWithSub/NameWithSub.jsx";
import profileCover from "../../assets/profile-cover.jpeg";
import profilePhoto from "../../assets/profile-photo.png";
import Image from "../Image/Image.jsx";
import Button from "../Button/Button.jsx";
import userImage1 from "../../assets/user-photo-1.jpg";
import userImage2 from "../../assets/user-photo-2.jpg";
import userImage3 from "../../assets/user-photo-3.jpg";
import userImage4 from "../../assets/user-photo-4.jpg";
import { Box, Typography, Link, List, ListItem } from "@mui/material";

const Profile = () => {
  return (
    <Box>
      <Box className="flex items-center justify-start gap-6 px-3 py-1">
        <ArrowLeft size="20px" />
        <NameWithSub
          name="React"
          sub="2,611 posts"
          nameStyle="font-semibold text-base"
        />
      </Box>
      <img src={profileCover} alt="profile cover photo" />
      <Box className="flex justify-end items-center relative p-2">
        <Box className="rounded-full p-1 bg-black w-fit absolute top-0 translate-y-[-50%] left-3">
          <Image src={profilePhoto} alt="profile personal photo" style="w-24" />
        </Box>
        <Box className="flex items-center gap-2">
          <Button className="border border-[#5e5e5e]">
            <Ellipsis size={"15px"} />
          </Button>
          <Button className="border border-[#5e5e5e]">
            <BellPlus size={"15px"} />
          </Button>
          <Button className="border border-[#5e5e5e] px-3">Following</Button>
        </Box>
      </Box>
      <Box className="flex flex-col gap-2 mt-1 p-2">
        <Box>
          <Typography variant="h1" fontSize="1.3rem" fontWeight="600">
            React
          </Typography>
          <Typography
            variant="subtitle2"
            color="rgb(102 102 102 / 1)"
            fontSize="0.75rem"
          >
            @reactjs
          </Typography>
        </Box>
        <Typography variant="subtitle2" fontSize={"1rem"}>
          The library for web and native user interfaces
        </Typography>
        <Box className="flex items-center gap-4">
          <Box className="flex items-center gap-1">
            <LinkIcon color="#666" size="15px" />
            <Link
              href="https://react.dev/"
              sx={{ color: "#1D9BF0", textDecoration: "none" }}
            >
              react.dev
            </Link>
          </Box>
          <Box className="flex items-center gap-1">
            <Calendar color="#666" size="15px" />
            <Typography variant="subtitle2" color="rgb(102 102 102 / 1)">
              Joined July 2013
            </Typography>
          </Box>
        </Box>
        <Box className="flex items-center gap-4">
          <NameWithSub
            name="267"
            sub="Following"
            containerStyle="flex items-center gap-1"
            nameStyle="text-[0.7rem]"
          />
          <NameWithSub
            name="708.1K"
            sub="Followers"
            containerStyle="flex items-center gap-1"
            nameStyle="text-[0.7rem]"
          />
        </Box>
        <Box className="flex items-center gap-1">
          <Box className="flex items-center w-[40px]">
            <Image src={userImage1} alt="user image 1" style="w-4 z-20" />
            <Image
              src={userImage2}
              alt="user image 2"
              style="w-4 translate-x-[-8px] z-10"
            />
            <Image
              src={userImage3}
              alt="user image 3"
              style="w-4 translate-x-[-18px]"
            />
          </Box>
          <Typography
            fontSize={"0.8rem"}
            color="rgb(102 102 102 / 1)"
            variant="subtitle2"
          >
            Followed by Mohammad Kukhun, Yazen Alsade 💫 and 14 others you
            follow
          </Typography>
        </Box>
      </Box>
      <Box className="mt-1">
        <List
          sx={{ paddingY: 0 }}
          className="flex items-center justify-around border-b border-[#333333]"
        >
          <ListItem
            sx={{ width: "fit-content" }}
            className="pb-3 px-1 border-b-2 border-[#1d9bf0] rounded-sm"
          >
            <Typography variant="subtitle2">Posts</Typography>
          </ListItem>
          <ListItem sx={{ width: "fit-content" }} className="pb-3 px-1">
            <Typography variant="subtitle2" color="rgb(102 102 102 / 1)">
              Replies
            </Typography>
          </ListItem>
          <ListItem sx={{ width: "fit-content" }} className="pb-3 px-1">
            <Typography variant="subtitle2" color="rgb(102 102 102 / 1)">
              Media
            </Typography>
          </ListItem>
          <ListItem sx={{ width: "fit-content" }} className="pb-3 px-1">
            <Typography variant="subtitle2" color="rgb(102 102 102 / 1)">
              Likes
            </Typography>
          </ListItem>
        </List>
      </Box>
      <Box className="pt-1 flex flex-col gap-1">
        <Box className="flex items-center gap-2 px-10">
          <Repeat2 color="#666" size="15px" />
          <Typography variant="subtitle2" color="rgb(102 102 102 / 1)">
            React reposted
          </Typography>
        </Box>
        <Box className="flex justify-between px-4">
          <Box className="flex items-center gap-2">
            <Image src={userImage4} alt="user image 4" style="w-7" />
            <Box>
              <Typography variant="subtitle2">
                danabramov.bsky.social{" "}
                <span className="text-secondary font-normal">
                  @dan_abramov - May29
                </span>
              </Typography>
              <Typography
                variant="subtitle2"
                fontWeight="300"
                className="font-light"
              >
                happy 10th birthday to{" "}
                <Link
                  href="#"
                  sx={{ color: "#1D9BF0", textDecoration: "none" }}
                >
                  @reactjs
                </Link>
                !
              </Typography>
            </Box>
          </Box>
          <Button>
            <Ellipsis size="15px" color="#666" />
          </Button>
        </Box>
        <Box>
          <List
            sx={{ paddingY: 0 }}
            className="flex items-center justify-around border-b border-[#333333] pt-1"
          >
            <ListItem sx={{ width: "fit-content" }} className="pb-3 px-1">
              <Button className="flex items-center gap-2">
                <MessageCircle color="#666" size="15px" />
                <Typography variant="subtitle2" color="rgb(102 102 102 / 1)">
                  46
                </Typography>
              </Button>
            </ListItem>
            <ListItem sx={{ width: "fit-content" }} className="pb-3 px-1">
              <Button className="flex items-center gap-2">
                <Repeat2 color="#666" size="15px" />
                <Typography variant="subtitle2" color="rgb(102 102 102 / 1)">
                  675
                </Typography>
              </Button>
            </ListItem>
            <ListItem sx={{ width: "fit-content" }} className="pb-3 px-1">
              <Button className="flex items-center gap-2">
                <Heart color="#666" size="15px" />
                <Typography variant="subtitle2" color="rgb(102 102 102 / 1)">
                  3701
                </Typography>
              </Button>
            </ListItem>
            <ListItem sx={{ width: "fit-content" }} className="pb-3 px-1">
              <Button className="flex items-center gap-2">
                <BarChart2 color="#666" size="15px" />
                <Typography variant="subtitle2" color="rgb(102 102 102 / 1)">
                  1.1M
                </Typography>
              </Button>
            </ListItem>
            <ListItem sx={{ width: "fit-content" }} className="pb-3 px-1">
              <Button>
                <ArrowUpFromLine color="#666" size="15px" />
              </Button>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
